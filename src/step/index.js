import u from "umbrellajs";
import scrollIntoView from "scroll-into-view";
import { clamp, getDataContents, getBoundingClientRect, getViewportRect } from "../utils";
// data-step="title: Step1; content: .../<>"
export default class Step {
  get el() {
    if (!this.container) {
      const image = u(`<div role="figure" class="guided-tour-step-image">${this.image ? `<img src="${this.image}" />` : ""}</div>`);
      const title = u(`<div role="heading" class="guided-tour-step-title">${this.title}</div>`);
      const content = u(`<div class="guided-tour-step-content">${this.content}</div>`);
      const highlight = this.highlight = u("<div class=\"guided-tour-step-highlight\"></div>");
      highlight.on("click", this.context.action);
      const tooltip = this.tooltip = u("<div role=\"tooltip\" class=\"guided-tour-step-tooltip\"></div>");
      const arrow = this.arrow = u("<div aria-hidden=\"true\" class=\"guided-tour-arrow\"></div>");
      tooltip.append(arrow).append(image).append(title).append(content);
      this.container = u(`<div role="dialog" class="guided-tour-step${this.first ? " guided-tour-step-first" : ""}${this.last ? " guided-tour-step-last" : ""}"></div>`);
      this.container.append(highlight).append(tooltip);
    }
    return this.container;
  }
  get target() {
    return this._target || u(this.selector).first();
  }
  set target(target) {
    this._target = target;
  }
  constructor(step, context) {
    this.index = 0;
    this.first = false;
    this.last = false;
    this.target = null;
    this.container = null;
    this.highlight = null;
    this.tooltip = null;
    this.arrow = null;
    this.rect = {};
    this.image = null;
    this.title = "";
    this.content = "";
    this.active = false;
    this.context = null;
    this.visible = false;
    this._target = null;
    this.context = context;
    this._timerHandler = null;
    this._scrollCancel = null;
    let data;
    if (typeof step === "object") {
      if(!(step.hasOwnProperty("title") && step.hasOwnProperty("content") && step.hasOwnProperty("step"))) {
        throw new Error(
          "invalid step parameter:\n" +
          JSON.stringify(step, null, 2) + "\n" +
          "see this doc for more detail: https://github.com/LikaloLLC/tourguide.js#json-based-approach"
        );
      }
      data = step;
      this.selector = step.selector;
    } else {
      this.target = step;
      data = getDataContents(u(step).data("tour"));
    }
    this.index = parseInt(data.step);
    this.title = data.title;
    this.content = data.content;
    this.actiontarget = data.actiontarget;
    this.image = data.image;
    if (data.image &&
      context.options.preloadimages &&
      !(/^data:/i.test(data.image))) {
      const preload = new Image();
      // preload.onload = (e) => {
      // };
      preload.onerror = () => {
        this.image = null;
      };
      preload.src = this.image;
    }
  }
  attach(root = "body") {
    u(root).append(this.el);
  }
  remove() {
    this.hide();
    this.el.remove();
  }
  position() {
    // {"left":0,"right":400,"top":0,"height":300,"bottom":300,"width":400}
    if (this.target && this.target.offsetParent !== null) {
      const rect = getBoundingClientRect(this.target);
      const view = getViewportRect();
      let style = this.highlight.first().style;
      style.top = `${rect.top - this.context.options.padding}px`;
      style.left = `${rect.left - this.context.options.padding}px`;
      style.width = `${rect.width + this.context.options.padding * 2}px`;
      style.height = `${rect.height + this.context.options.padding * 2}px`;
      const tooltip = this.tooltip;
      const arrow = this.arrow;
      style = tooltip.first().style;
      style.opacity = 0.1;
      // Compute vertical position
      if (view.height / 2 > rect.top) {
        tooltip.addClass("guided-tour-arrow-top");
        style.top = `${rect.top + rect.height}px`;
      } else {
        tooltip.addClass("guided-tour-arrow-bottom");
        style.bottom = `${view.height - rect.top}px`;
      }
      // Compute horizontal position
      if (view.width / 2 > rect.left) {
        style.left = `${rect.left}px`;
        arrow.first().style.left = (rect.width > 400) ? "18px" : `${clamp(rect.width / 2, 14, 386)}px`;
      } else {
        style.right = `${Math.max(view.width - rect.right, 40)}px`;
        arrow.first().style.right = (view.width - rect.right) < 40 ||
          (rect.width > 400) ? "8px" : `${clamp(rect.width / 2 - 8, 14, 386)}px`;
      }
    } else {
      const view = getViewportRect();
      let style = this.highlight.first().style;
      style.top = `${0}px`;
      style.left = `${0}px`;
      style.width = `${0}px`;
      style.height = `${0}px`;
      style.boxShadow = "none";
      const tooltip = this.tooltip;
      style = tooltip.first().style;
      style.opacity = 0.1;
      style.top = `${view.height / 2}px`;
      style.left = `${view.width / 2}px`;
      tooltip.addClass("guided-tour-arrow-none");
      tooltip.addClass("guided-tour-center");

      if (this.context._background)
        this.context._background.show();
    }
  }
  adjust() {
    const rect = getBoundingClientRect(this.tooltip);
    const view = getViewportRect();
    let style = this.tooltip.first().style;
    if (rect.top < 0) {
      style.top = "8px";
    }
    if (rect.top > view.height - rect.height) {
      style.top = `${view.height - rect.height - 40}px`;
    }
    if (rect.left < 0) {
      style.left = "8px";
    }
    if (rect.right < 40) {
      style.right = "40px";
    }
    style.opacity = 1;
  }
  cancel() {
    if(this._timerHandler) clearTimeout(this._timerHandler);
    if(this._scrollCancel) this._scrollCancel();
  }
  show() {
    this.cancel();
    if (!this.visible) {
      const show = () => {
        this.position();
        this.el.addClass("active");
        this.adjust();
        this.visible = true;
      };
      if (this.target) {
        this._scrollCancel = scrollIntoView(this.target, {
          time: this.context.options.animationspeed,
          cancellable: true,
        }, show);
      } else this._timerHandler = setTimeout(show, this.context.options.animationspeed);
      return true;
    }
    return false;
  }
  hide() {
    this.cancel();
    if (this.visible) {
      this.el.removeClass("active");
      this.tooltip.removeClass("guided-tour-arrow-top");
      this.visible = false;
      return true;
    }
    return false;
  }
  toJSON() {
    // eslint-disable-next-line no-undef
    return { index, title, contnet, image, active } = this;
  }
}
