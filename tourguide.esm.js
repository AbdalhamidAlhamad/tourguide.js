function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var umbrella_min = createCommonjsModule(function (module) {
/* Umbrella JS 3.2.2 umbrellajs.com */

var u=function(t,e){return this instanceof u?t instanceof u?t:("string"==typeof t&&(t=this.select(t,e)),t&&t.nodeName&&(t=[t]),void(this.nodes=this.slice(t))):new u(t,e)};u.prototype={get length(){return this.nodes.length}},u.prototype.nodes=[],u.prototype.addClass=function(){return this.eacharg(arguments,function(t,e){t.classList.add(e);})},u.prototype.adjacent=function(i,t,n){return "number"==typeof t&&(t=0===t?[]:new Array(t).join().split(",").map(Number.call,Number)),this.each(function(r,o){var e=document.createDocumentFragment();u(t||{}).map(function(t,e){var n="function"==typeof i?i.call(this,t,e,r,o):i;return "string"==typeof n?this.generate(n):u(n)}).each(function(t){this.isInPage(t)?e.appendChild(u(t).clone().first()):e.appendChild(t);}),n.call(this,r,e);})},u.prototype.after=function(t,e){return this.adjacent(t,e,function(t,e){t.parentNode.insertBefore(e,t.nextSibling);})},u.prototype.append=function(t,e){return this.adjacent(t,e,function(t,e){t.appendChild(e);})},u.prototype.args=function(t,e,n){return "function"==typeof t&&(t=t(e,n)),"string"!=typeof t&&(t=this.slice(t).map(this.str(e,n))),t.toString().split(/[\s,]+/).filter(function(t){return t.length})},u.prototype.array=function(o){o=o;var i=this;return this.nodes.reduce(function(t,e,n){var r;return o?((r=o.call(i,e,n))||(r=!1),"string"==typeof r&&(r=u(r)),r instanceof u&&(r=r.nodes)):r=e.innerHTML,t.concat(!1!==r?r:[])},[])},u.prototype.attr=function(t,e,r){return r=r?"data-":"",this.pairs(t,e,function(t,e){return t.getAttribute(r+e)},function(t,e,n){t.setAttribute(r+e,n);})},u.prototype.before=function(t,e){return this.adjacent(t,e,function(t,e){t.parentNode.insertBefore(e,t);})},u.prototype.children=function(t){return this.map(function(t){return this.slice(t.children)}).filter(t)},u.prototype.clone=function(){return this.map(function(t,e){var n=t.cloneNode(!0),r=this.getAll(n);return this.getAll(t).each(function(t,e){for(var n in this.mirror)this.mirror[n]&&this.mirror[n](t,r.nodes[e]);}),n})},u.prototype.getAll=function(t){return u([t].concat(u("*",t).nodes))},u.prototype.mirror={},u.prototype.mirror.events=function(t,e){if(t._e)for(var n in t._e)t._e[n].forEach(function(t){u(e).on(n,t.callback);});},u.prototype.mirror.select=function(t,e){u(t).is("select")&&(e.value=t.value);},u.prototype.mirror.textarea=function(t,e){u(t).is("textarea")&&(e.value=t.value);},u.prototype.closest=function(e){return this.map(function(t){do{if(u(t).is(e))return t}while((t=t.parentNode)&&t!==document)})},u.prototype.data=function(t,e){return this.attr(t,e,!0)},u.prototype.each=function(t){return this.nodes.forEach(t.bind(this)),this},u.prototype.eacharg=function(n,r){return this.each(function(e,t){this.args(n,e,t).forEach(function(t){r.call(this,e,t);},this);})},u.prototype.empty=function(){return this.each(function(t){for(;t.firstChild;)t.removeChild(t.firstChild);})},u.prototype.filter=function(e){var t=function(t){return t.matches=t.matches||t.msMatchesSelector||t.webkitMatchesSelector,t.matches(e||"*")};return "function"==typeof e&&(t=e),e instanceof u&&(t=function(t){return -1!==e.nodes.indexOf(t)}),u(this.nodes.filter(t))},u.prototype.find=function(e){return this.map(function(t){return u(e||"*",t)})},u.prototype.first=function(){return this.nodes[0]||!1},u.prototype.generate=function(t){return /^\s*<tr[> ]/.test(t)?u(document.createElement("table")).html(t).children().children().nodes:/^\s*<t(h|d)[> ]/.test(t)?u(document.createElement("table")).html(t).children().children().children().nodes:/^\s*</.test(t)?u(document.createElement("div")).html(t).children().nodes:document.createTextNode(t)},u.prototype.handle=function(){var t=this.slice(arguments).map(function(e){return "function"==typeof e?function(t){t.preventDefault(),e.apply(this,arguments);}:e},this);return this.on.apply(this,t)},u.prototype.hasClass=function(){return this.is("."+this.args(arguments).join("."))},u.prototype.html=function(e){return void 0===e?this.first().innerHTML||"":this.each(function(t){t.innerHTML=e;})},u.prototype.is=function(t){return 0<this.filter(t).length},u.prototype.isInPage=function(t){return t!==document.body&&document.body.contains(t)},u.prototype.last=function(){return this.nodes[this.length-1]||!1},u.prototype.map=function(t){return t?u(this.array(t)).unique():this},u.prototype.not=function(e){return this.filter(function(t){return !u(t).is(e||!0)})},u.prototype.off=function(t,e,n){var r=null==e&&null==n,o=null,i=e;return "string"==typeof e&&(o=e,i=n),this.eacharg(t,function(e,n){u(e._e?e._e[n]:[]).each(function(t){(r||t.orig_callback===i&&t.selector===o)&&e.removeEventListener(n,t.callback);});})},u.prototype.on=function(t,e,o){var i=null,n=e;"string"==typeof e&&(i=e,n=o,e=function(e){var n=arguments,r=!1;u(e.currentTarget).find(i).each(function(t){if(t===e.target||t.contains(e.target)){r=!0;try{Object.defineProperty(e,"currentTarget",{get:function(){return t}});}catch(t){}o.apply(t,n);}}),r||e.currentTarget!==e.target||o.apply(e.target,n);});var r=function(t){return e.apply(this,[t].concat(t.detail||[]))};return this.eacharg(t,function(t,e){t.addEventListener(e,r),t._e=t._e||{},t._e[e]=t._e[e]||[],t._e[e].push({callback:r,orig_callback:n,selector:i});})},u.prototype.pairs=function(n,t,e,r){if(void 0!==t){var o=n;(n={})[o]=t;}return "object"==typeof n?this.each(function(t){for(var e in n)r(t,e,n[e]);}):this.length?e(this.first(),n):""},u.prototype.param=function(e){return Object.keys(e).map(function(t){return this.uri(t)+"="+this.uri(e[t])}.bind(this)).join("&")},u.prototype.parent=function(t){return this.map(function(t){return t.parentNode}).filter(t)},u.prototype.prepend=function(t,e){return this.adjacent(t,e,function(t,e){t.insertBefore(e,t.firstChild);})},u.prototype.remove=function(){return this.each(function(t){t.parentNode&&t.parentNode.removeChild(t);})},u.prototype.removeClass=function(){return this.eacharg(arguments,function(t,e){t.classList.remove(e);})},u.prototype.replace=function(t,e){var n=[];return this.adjacent(t,e,function(t,e){n=n.concat(this.slice(e.children)),t.parentNode.replaceChild(e,t);}),u(n)},u.prototype.scroll=function(){return this.first().scrollIntoView({behavior:"smooth"}),this},u.prototype.select=function(t,e){return t=t.replace(/^\s*/,"").replace(/\s*$/,""),/^</.test(t)?u().generate(t):(e||document).querySelectorAll(t)},u.prototype.serialize=function(){var r=this;return this.slice(this.first().elements).reduce(function(e,n){return !n.name||n.disabled||"file"===n.type?e:/(checkbox|radio)/.test(n.type)&&!n.checked?e:"select-multiple"===n.type?(u(n.options).each(function(t){t.selected&&(e+="&"+r.uri(n.name)+"="+r.uri(t.value));}),e):e+"&"+r.uri(n.name)+"="+r.uri(n.value)},"").slice(1)},u.prototype.siblings=function(t){return this.parent().children(t).not(this)},u.prototype.size=function(){return this.first().getBoundingClientRect()},u.prototype.slice=function(t){return t&&0!==t.length&&"string"!=typeof t&&"[object Function]"!==t.toString()?t.length?[].slice.call(t.nodes||t):[t]:[]},u.prototype.str=function(e,n){return function(t){return "function"==typeof t?t.call(this,e,n):t.toString()}},u.prototype.text=function(e){return void 0===e?this.first().textContent||"":this.each(function(t){t.textContent=e;})},u.prototype.toggleClass=function(t,e){return !!e===e?this[e?"addClass":"removeClass"](t):this.eacharg(t,function(t,e){t.classList.toggle(e);})},u.prototype.trigger=function(t){var o=this.slice(arguments).slice(1);return this.eacharg(t,function(t,e){var n,r={bubbles:!0,cancelable:!0,detail:o};try{n=new window.CustomEvent(e,r);}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,o);}t.dispatchEvent(n);})},u.prototype.unique=function(){return u(this.nodes.reduce(function(t,e){return null!=e&&!1!==e&&-1===t.indexOf(e)?t.concat(e):t},[]))},u.prototype.uri=function(t){return encodeURIComponent(t).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},u.prototype.wrap=function(t){return this.map(function(e){return u(t).each(function(t){(function(t){for(;t.firstElementChild;)t=t.firstElementChild;return u(t)})(t).append(e.cloneNode(!0)),e.parentNode.replaceChild(t,e);})})},module.exports&&(module.exports=u,module.exports.u=u);
});
var umbrella_min_1 = umbrella_min.u;


var COMPLETE = 'complete',
    CANCELED = 'canceled';

function raf(task){
    if('requestAnimationFrame' in window){
        return window.requestAnimationFrame(task);
    }

    setTimeout(task, 16);
}

function setElementScroll(element, x, y){
    if(element.self === element){
        element.scrollTo(x, y);
    }else{
        element.scrollLeft = x;
        element.scrollTop = y;
    }
}

function getTargetScrollLocation(scrollSettings, parent){
    var align = scrollSettings.align,
        target = scrollSettings.target,
        targetPosition = target.getBoundingClientRect(),
        parentPosition,
        x,
        y,
        differenceX,
        differenceY,
        targetWidth,
        targetHeight,
        leftAlign = align && align.left != null ? align.left : 0.5,
        topAlign = align && align.top != null ? align.top : 0.5,
        leftOffset = align && align.leftOffset != null ? align.leftOffset : 0,
        topOffset = align && align.topOffset != null ? align.topOffset : 0,
        leftScalar = leftAlign,
        topScalar = topAlign;

    if(scrollSettings.isWindow(parent)){
        targetWidth = Math.min(targetPosition.width, parent.innerWidth);
        targetHeight = Math.min(targetPosition.height, parent.innerHeight);
        x = targetPosition.left + parent.pageXOffset - parent.innerWidth * leftScalar + targetWidth * leftScalar;
        y = targetPosition.top + parent.pageYOffset - parent.innerHeight * topScalar + targetHeight * topScalar;
        x -= leftOffset;
        y -= topOffset;
        differenceX = x - parent.pageXOffset;
        differenceY = y - parent.pageYOffset;
    }else{
        targetWidth = targetPosition.width;
        targetHeight = targetPosition.height;
        parentPosition = parent.getBoundingClientRect();
        var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
        var offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
        x = offsetLeft + (targetWidth * leftScalar) - parent.clientWidth * leftScalar;
        y = offsetTop + (targetHeight * topScalar) - parent.clientHeight * topScalar;
        x -= leftOffset;
        y -= topOffset;
        x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
        y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
        differenceX = x - parent.scrollLeft;
        differenceY = y - parent.scrollTop;
    }

    return {
        x: x,
        y: y,
        differenceX: differenceX,
        differenceY: differenceY
    };
}

function animate(parent){
    var scrollSettings = parent._scrollSettings;

    if(!scrollSettings){
        return;
    }

    var maxSynchronousAlignments = scrollSettings.maxSynchronousAlignments;

    var location = getTargetScrollLocation(scrollSettings, parent),
        time = Date.now() - scrollSettings.startTime,
        timeValue = Math.min(1 / scrollSettings.time * time, 1);

    if(scrollSettings.endIterations >= maxSynchronousAlignments){
        setElementScroll(parent, location.x, location.y);
        parent._scrollSettings = null;
        return scrollSettings.end(COMPLETE);
    }

    var easeValue = 1 - scrollSettings.ease(timeValue);

    setElementScroll(parent,
        location.x - location.differenceX * easeValue,
        location.y - location.differenceY * easeValue
    );

    if(time >= scrollSettings.time){
        scrollSettings.endIterations++;
        return animate(parent);
    }

    raf(animate.bind(null, parent));
}

function defaultIsWindow(target){
    return target.self === target
}

function transitionScrollTo(target, parent, settings, callback){
    var idle = !parent._scrollSettings,
        lastSettings = parent._scrollSettings,
        now = Date.now(),
        cancelHandler,
        passiveOptions = { passive: true };

    if(lastSettings){
        lastSettings.end(CANCELED);
    }

    function end(endType){
        parent._scrollSettings = null;

        if(parent.parentElement && parent.parentElement._scrollSettings){
            parent.parentElement._scrollSettings.end(endType);
        }

        if(settings.debug){
            console.log('Scrolling ended with type', endType, 'for', parent);
        }

        callback(endType);
        if(cancelHandler){
            parent.removeEventListener('touchstart', cancelHandler, passiveOptions);
            parent.removeEventListener('wheel', cancelHandler, passiveOptions);
        }
    }

    var maxSynchronousAlignments = settings.maxSynchronousAlignments;

    if(maxSynchronousAlignments == null){
        maxSynchronousAlignments = 3;
    }

    parent._scrollSettings = {
        startTime: now,
        endIterations: 0,
        target: target,
        time: settings.time,
        ease: settings.ease,
        align: settings.align,
        isWindow: settings.isWindow || defaultIsWindow,
        maxSynchronousAlignments: maxSynchronousAlignments,
        end: end
    };

    if(!('cancellable' in settings) || settings.cancellable){
        cancelHandler = end.bind(null, CANCELED);
        parent.addEventListener('touchstart', cancelHandler, passiveOptions);
        parent.addEventListener('wheel', cancelHandler, passiveOptions);
    }

    if(idle){
        animate(parent);
    }

    return cancelHandler
}

function defaultIsScrollable(element){
    return (
        'pageXOffset' in element ||
        (
            element.scrollHeight !== element.clientHeight ||
            element.scrollWidth !== element.clientWidth
        ) &&
        getComputedStyle(element).overflow !== 'hidden'
    );
}

function defaultValidTarget(){
    return true;
}

function findParentElement(el){
    if (el.assignedSlot) {
        return findParentElement(el.assignedSlot);
    }

    if (el.parentElement) {
        if(el.parentElement.tagName === 'BODY'){
            return el.parentElement.ownerDocument.defaultView || el.parentElement.ownerDocument.ownerWindow;
        }
        return el.parentElement;
    }

    if (el.getRootNode){
        var parent = el.getRootNode();
        if(parent.nodeType === 11) {
            return parent.host;
        }
    }
}

var scrollIntoView = function(target, settings, callback){
    if(!target){
        return;
    }

    if(typeof settings === 'function'){
        callback = settings;
        settings = null;
    }

    if(!settings){
        settings = {};
    }

    settings.time = isNaN(settings.time) ? 1000 : settings.time;
    settings.ease = settings.ease || function(v){return 1 - Math.pow(1 - v, v / 2);};

    var parent = findParentElement(target),
        parents = 1;

    function done(endType){
        parents--;
        if(!parents){
            callback && callback(endType);
        }
    }

    var validTarget = settings.validTarget || defaultValidTarget;
    var isScrollable = settings.isScrollable;

    if(settings.debug){
        console.log('About to scroll to', target);

        if(!parent){
            console.error('Target did not have a parent, is it mounted in the DOM?');
        }
    }

    var cancel;

    while(parent){
        if(settings.debug){
            console.log('Scrolling parent node', parent);
        }

        if(validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))){
            parents++;
            cancel = transitionScrollTo(target, parent, settings, done);
        }

        parent = findParentElement(parent);

        if(!parent){
            done(COMPLETE);
            break;
        }
    }

    return cancel;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function clamp(number, min, max) {
  min = isNaN(min) ? number : min;
  max = isNaN(max) ? number : max;
  return Math.max(min, Math.min(number, max));
}

function getDataContents() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var defaults$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var parts = data.split(";");
  var result = _extends({}, defaults$$1);
  parts.forEach(function (part) {
    var entries = (part || "").split(":");
    result[(entries[0] || "").trim()] = (entries[1] || "").trim();
  });
  return result;
}

function getBoundingClientRect(el) {
  var rect = umbrella_min(el).size();
  var view = getViewportRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    right: rect.right,
    viewtop: rect.top - view.scrollY,
    viewbottom: rect.bottom - view.scrollY,
    viewleft: rect.left - view.scrollX,
    viewright: rect.right - view.scrollX
  };
}

function getViewportRect() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    scrollX: window.scrollX,
    scrollY: window.scrollY,
    bodyWidth: document.body.clientWidth,
    bodyHeight: document.body.clientHeight
  };
}

// data-step="title: Step1; content: .../<>"

var Step = function () {
  createClass(Step, [{
    key: "el",
    get: function get$$1() {
      var _this = this;

      if (!this.container) {
        var _image = umbrella_min("<div role=\"figure\" class=\"guided-tour-step-image\">" + (this.image ? "<img src=\"" + this.image + "\" />" : "") + "</div>");
        var _title = umbrella_min("<div role=\"heading\" class=\"guided-tour-step-title\">" + this.title + "</div>");
        var content = umbrella_min("<div class=\"guided-tour-step-content\">" + this.content + "</div>");
        var highlight = this.highlight = umbrella_min("<div class=\"guided-tour-step-highlight\"></div>");
        highlight.on("click", this.context.action);
        var tooltip = this.tooltip = umbrella_min("<div role=\"tooltip\" class=\"guided-tour-step-tooltip\"></div>");
        var arrow = this.arrow = umbrella_min("<div aria-hidden=\"true\" class=\"guided-tour-arrow\"></div>");
        tooltip.append(arrow).append(_image).append(_title).append(content);
        this.container = umbrella_min("<div role=\"dialog\" class=\"guided-tour-step" + (this.first ? " guided-tour-step-first" : "") + (this.last ? " guided-tour-step-last" : "") + "\"></div>");
        this.container.append(highlight).append(tooltip);
      }
      return this.container;
    }
  }, {
    key: "target",
    get: function get$$1() {
      return this._target || umbrella_min(this.selector).first();
    },
    set: function set$$1(target) {
      this._target = target;
    }
  }]);

  function Step(step, context) {
    var _this2 = this;

    classCallCheck(this, Step);

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
    var data = void 0;
    if ((typeof step === "undefined" ? "undefined" : _typeof(step)) === "object") {
      if (!(step.hasOwnProperty("title") && step.hasOwnProperty("content") && step.hasOwnProperty("step"))) {
        throw new Error("invalid step parameter:\n" + JSON.stringify(step, null, 2) + "\n" + "see this doc for more detail: https://github.com/LikaloLLC/tourguide.js#json-based-approach");
      }
      data = step;
      this.selector = step.selector;
    } else {
      this.target = step;
      data = getDataContents(umbrella_min(step).data("tour"));
    }
    this.index = parseInt(data.step);
    this.title = data.title;
    this.content = data.content;
    this.actiontarget = data.actiontarget;
    this.image = data.image;
    if (data.image && context.options.preloadimages && !/^data:/i.test(data.image)) {
      var preload = new Image();
      // preload.onload = (e) => {
      // };
      preload.onerror = function () {
        _this2.image = null;
      };
      preload.src = this.image;
    }
  }

  createClass(Step, [{
    key: "attach",
    value: function attach() {
      var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";

      umbrella_min(root).append(this.el);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.hide();
      this.el.remove();
    }
  }, {
    key: "position",
    value: function position() {
      // {"left":0,"right":400,"top":0,"height":300,"bottom":300,"width":400}
      if (this.target && this.target.offsetParent !== null) {
        var rect = getBoundingClientRect(this.target);
        var view = getViewportRect();
        var style = this.highlight.first().style;
        style.top = rect.top - this.context.options.padding + "px";
        style.left = rect.left - this.context.options.padding + "px";
        style.width = rect.width + this.context.options.padding * 2 + "px";
        style.height = rect.height + this.context.options.padding * 2 + "px";
        var tooltip = this.tooltip;
        var arrow = this.arrow;
        style = tooltip.first().style;
        style.opacity = 0.1;
        // Compute vertical position
        if (view.height / 2 > rect.top) {
          tooltip.addClass("guided-tour-arrow-top");
          style.top = rect.top + rect.height + "px";
        } else {
          tooltip.addClass("guided-tour-arrow-bottom");
          style.bottom = view.height - rect.top + "px";
        }
        // Compute horizontal position
        if (view.width / 2 > rect.left) {
          style.left = rect.left + "px";
          arrow.first().style.left = rect.width > 400 ? "18px" : clamp(rect.width / 2, 14, 386) + "px";
        } else {
          style.right = Math.max(view.width - rect.right, 40) + "px";
          arrow.first().style.right = view.width - rect.right < 40 || rect.width > 400 ? "8px" : clamp(rect.width / 2 - 8, 14, 386) + "px";
        }
      } else {
        var _view = getViewportRect();
        var _style = this.highlight.first().style;
        _style.top = 0 + "px";
        _style.left = 0 + "px";
        _style.width = 0 + "px";
        _style.height = 0 + "px";
        _style.boxShadow = "none";
        var _tooltip = this.tooltip;
        _style = _tooltip.first().style;
        _style.opacity = 0.1;
        _style.top = _view.height / 2 + "px";
        _style.left = _view.width / 2 + "px";
        _tooltip.addClass("guided-tour-arrow-none");
        _tooltip.addClass("guided-tour-center");

        if (this.context._background) this.context._background.show();
      }
    }
  }, {
    key: "adjust",
    value: function adjust() {
      var rect = getBoundingClientRect(this.tooltip);
      var view = getViewportRect();
      var style = this.tooltip.first().style;
      if (rect.top < 0) {
        style.top = "8px";
      }
      if (rect.top > view.height - rect.height) {
        style.top = view.height - rect.height - 40 + "px";
      }
      if (rect.left < 0) {
        style.left = "8px";
      }
      if (rect.right < 40) {
        style.right = "40px";
      }
      style.opacity = 1;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this._timerHandler) clearTimeout(this._timerHandler);
      if (this._scrollCancel) this._scrollCancel();
    }
  }, {
    key: "show",
    value: function show() {
      var _this3 = this;

      this.cancel();
      if (!this.visible) {
        var show = function show() {
          _this3.position();
          _this3.el.addClass("active");
          _this3.adjust();
          _this3.visible = true;
        };
        if (this.target) {
          this._scrollCancel = scrollIntoView(this.target, {
            time: this.context.options.animationspeed,
            cancellable: true
          }, show);
        } else this._timerHandler = setTimeout(show, this.context.options.animationspeed);
        return true;
      }
      return false;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.cancel();
      if (this.visible) {
        this.el.removeClass("active");
        this.tooltip.removeClass("guided-tour-arrow-top");
        this.visible = false;
        return true;
      }
      return false;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var _ref;

      // eslint-disable-next-line no-undef
      return _ref = this, index = _ref.index, title = _ref.title, contnet = _ref.contnet, image = _ref.image, active = _ref.active, _ref;
    }
  }]);
  return Step;
}();

var Step$1 = function () {
  createClass(Step, [{
    key: "el",
    get: function get$$1() {
      if (!this.container) {
        this.container = umbrella_min("<div role=\"dialog\" class=\"guided-tour-background\"></div>");
      }
      return this.container;
    }
  }]);

  function Step(context) {
    classCallCheck(this, Step);

    this.container = null;
    this.active = false;
    this.context = context;
  }

  createClass(Step, [{
    key: "attach",
    value: function attach() {
      var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";

      umbrella_min(root).append(this.el);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.hide();
      this.el.remove();
    }
  }, {
    key: "show",
    value: function show() {
      if (!this.visible) {
        this.el.addClass("active");
        this.visible = true;
        return true;
      }
      return false;
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this = this;

      if (this.visible) {
        var hide = function hide() {
          _this.el.removeClass("active");
          _this.visible = false;
        };
        setTimeout(hide, this.context.options.animationspeed);
        return true;
      }
      return false;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var _ref;

      // eslint-disable-next-line no-undef
      return _ref = this, active = _ref.active, _ref;
    }
  }]);
  return Step;
}();

var StepsSource = {
  DOM: 0,
  JSON: 1,
  REMOTE: 2
};

var Tour = function () {
  createClass(Tour, [{
    key: "currentstep",
    get: function get$$1() {
      return this._steps[this._current];
    }
  }, {
    key: "length",
    get: function get$$1() {
      return this._steps.length;
    }
  }, {
    key: "steps",
    get: function get$$1() {
      return this._steps.map(function (step) {
        return step.toJSON();
      });
    }
  }, {
    key: "hasnext",
    get: function get$$1() {
      return this.nextstep !== this._current;
    }
  }, {
    key: "nextstep",
    get: function get$$1() {
      return clamp(this._current + 1, 0, this.length - 1);
    }
  }, {
    key: "previousstep",
    get: function get$$1() {
      return clamp(this._current - 1, 0);
    }
  }, {
    key: "options",
    get: function get$$1() {
      return this._options;
    }
  }]);

  function Tour() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Tour);

    this._options = Object.assign({
      root: "body",
      selector: "[data-tour]",
      animationspeed: 300,
      padding: 5,
      steps: null,
      src: null,
      restoreinitialposition: true,
      preloadimages: false,
      request: {
        "options": {
          "mode": "cors",
          "cache": "no-cache"
        },
        "headers": {
          "Content-Type": "application/json"
        }
      },
      onStart: function onStart() {},
      onStop: function onStop() {},
      onComplete: function onComplete() {},
      onStep: function onStep() {},
      onAction: function onAction() {}
    }, options);
    this._background = null;
    this._steps = [];
    this._current = 0;
    this._active = false;
    this._stepsSrc = StepsSource.DOM;
    this._ready = false;
    this._initialposition = null;
    this.start = this.start.bind(this);
    this.action = this.action.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.go = this.go.bind(this);
    this.stop = this.stop.bind(this);
    this.complete = this.complete.bind(this);
    if (_typeof(this._options.steps) === "object" && Array.isArray(this._options.steps)) {
      this._stepsSrc = StepsSource.JSON;
      this._steps = this._options.steps.map(function (o) {
        return new Step(o, _this);
      });
      this._ready = true;
    } else if (typeof this._options.src === "string") {
      this._stepsSrc = StepsSource.REMOTE;
      fetch(new Request(this._options.src, this._options.request)).then(function (response) {
        return response.json().then(function (data) {
          _this._steps = data.map(function (o) {
            return new Step(o, _this);
          });
          _this._ready = true;
        });
      });
    } else if (umbrella_min(this._options.selector).length > 0) {
      this._ready = true;
    } else {
      throw new Error("Tour is not configured properly. Check documentation.");
    }
  }

  createClass(Tour, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.reset();
      this._background = new Step$1(this);
      if (this._stepsSrc === StepsSource.DOM) {
        var steps = umbrella_min(this._options.selector).nodes;
        this._steps = steps.map(function (el) {
          return new Step(el, _this2);
        });
      }
      this._steps = this._steps.sort(function (a, b) {
        return a.index - b.index;
      });
      this._steps[0].first = true;
      this._steps[this.length - 1].last = true;
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this._active) this.stop();
      if (this._stepsSrc === StepsSource.DOM) {
        this._steps = [];
      }
      this._current = 0;
    }
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;

      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this._ready) {
        if (this._options.restoreinitialposition) {
          this._initialposition = {
            top: window.scrollX,
            left: window.screenY,
            behavior: "smooth"
          };
        }
        if (!this._active) {
          umbrella_min(this._options.root).addClass("guided-tour");
          this.init();
          this._background.attach(this._options.root);
          this._steps.forEach(function (step) {
            return step.attach(_this3._options.root);
          });
          this._current = step;
          this.currentstep.show();
          this._active = true;
          this._options.onStart(this._options);
        } else {
          this.go(step);
        }
      } else {
        throw new Error("Tour is not configured properly. Check documentation.");
      }
    }
  }, {
    key: "action",
    value: function action(e) {
      if (this._active) {
        var currentstep = this.currentstep;

        if (currentstep.actiontarget) {
          var actiontarget = umbrella_min(currentstep.target).find(currentstep.actiontarget);
          if (actiontarget) {
            try {
              actiontarget.first().click();
            } catch (e) {
              // eslint-disable-next-line no-console
              console.warn("Could not find actiontarget: " + currentstep.actiontarget + " on step #" + currentstep.index);
            }
          }
        }
        this._options.onAction(currentstep, e);
      }
    }
  }, {
    key: "next",
    value: function next() {
      if (this._active) {
        this.go(this.nextstep, "next");
      }
    }
  }, {
    key: "previous",
    value: function previous() {
      if (this._active) {
        this.go(this.previousstep, "previous");
      }
    }
  }, {
    key: "go",
    value: function go(step, type) {
      if (this._active && this._current !== step) {
        this.currentstep.hide();
        this._background.show();
        this._current = clamp(step, 0, this.length - 1);
        this._background.hide();
        this.currentstep.show();
        this._options.onStep(this.currentstep, type);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this._active) {
        this.currentstep.hide();
        this._active = false;
        this._background.remove();
        this._steps.forEach(function (step) {
          return step.remove();
        });
        umbrella_min(this._options.root).removeClass("guided-tour");
        if (this._options.restoreinitialposition) {
          window.scrollTo(this._initialposition);
        }
        this._options.onStop(this._options);
      }
    }
  }, {
    key: "complete",
    value: function complete() {
      if (this._active) {
        this.stop();
        this._options.onComplete();
      }
    }
  }]);
  return Tour;
}();

export default Tour;
