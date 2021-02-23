import u from "umbrellajs";

export function clamp(number, min, max) {
  min = isNaN(min) ? number : min;
  max = isNaN(max) ? number : max;
  return Math.max(min, Math.min(number, max));
}

export function parseNumber(number, parseTo = "float") {
  if (typeof number === "number") return number;
  let ret = 0;
  try {
    if (parseTo === "int") {
      ret = Number.parseInt(number);
    } else {
      ret = Number.parseFloat(number);
    }
  } catch (error) {
    ret = 0;
  }
  if (Number.isNaN(ret)) {
    return 0;
  }
  return ret;
}

export function getDataContents(data = "", defaults = {}) {
  const parts = data.split(";");
  let result = { ...defaults };
  parts.forEach((part) => {
    const entries = (part || "").split(":");
    result[(entries[0] || "").trim()] = (entries[1] || "").trim();
  });
  return result;
}

export function isTargetValid(target) {
  return target && target.offsetParent !== null;
}

export function getBoundingClientRect(el, root) {
  const rect = u(el).size();
  const view = getViewportRect(root);

  return {
    width: rect.width,
    height: rect.height,
    top: rect.top + view.scrollY - view.rootTop,
    bottom: rect.bottom + view.scrollY - view.rootTop,
    left: rect.left + view.scrollX - view.rootLeft,
    right: rect.right + view.scrollX - view.rootLeft,
    viewTop: rect.top,
    viewBottom: rect.bottom,
    viewLeft: rect.left,
    viewRight: rect.right,
  };
}

export function getViewportRect(root) {
  try {
    const rootEl = u(root).first();
    const rect = u(root).size();
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      scrollX: rootEl.scrollLeft,
      scrollY: rootEl.scrollTop,
      rootWidth: rect.width,
      rootHeight: rect.height,
      rootTop: rootEl.scrollTop === window.scrollY ? 0 : rect.top,
      rootLeft: rootEl.scrollLeft === window.scrollX ? 0 : rect.left,
    };
  } catch (error) {
    console.error(error);
    throw Error(`root is not valid: ${root}`);
  }
}

// alternative for jQuery .css() get method
export function getStyle(el, css3Prop) {
  const originalEl = u(el).first();

  // FF, Chrome etc.
  if (window.getComputedStyle) {
    try {
      return getComputedStyle(originalEl).getPropertyValue(css3Prop);
    } catch (e) {
      return "";
    }
  } else {
    // IE
    if (originalEl.currentStyle) {
      try {
        return originalEl.currentStyle[css3Prop];
      } catch (e) {
        return "";
      }
    }
  }
  return "";
}

const allowedProperties = ["top", "left", "right", "bottom", "width", "height", "maxWidth", "minWidth", "transform"];
export function setStyle(element, object) {
  if (!Object.prototype.toString.call(object) === "[object Object]") return;

  const style = u(element).first().style;

  Object.entries(object)
    .filter(([key, val]) => allowedProperties.includes(key) && (typeof val === "number" || typeof val === "string"))
    .forEach(([key, val]) => {
      const value = typeof val === "number" ? `${val}px` : val;
      switch (key) {
      case "top":
        style.top = value;
        break;
      case "left":
        style.left = value;
        break;
      case "right":
        style.right = value;
        break;
      case "bottom":
        style.bottom = value;
        break;
      case "width":
        style.width = value;
        break;
      case "height":
        style.height = value;
        break;
      case "maxWidth":
        style.maxWidth = value;
        break;
      case "minWidth":
        style.minWidth = value;
        break;
      case "transform":
        style.transform = value;
        break;
      default:
        break;
      }
    });
}

/**
 * TODO: This func is convert the color object to the sets of css variables
 * @param {*} obj colorObject 
 * @param {*} prefix prefix of css variable name
 * @param {*} selector target css selector
 * Example:
 *  input: { overlay: "gray", background: "white", bulletCurrent: "red" }
 *  output: ":root { --tourguide-overlay: "gray"; --tourguide-background: "white"; --tourguide-bullet-current: "red"; }"
 */
export function colorObjToStyleVarString(obj, prefix = "--tourguide", selector = ":root") {
  const styleArray = [];
  Object.entries(obj).forEach(([key, value]) => {
    const splitedNameArray = [prefix];
    let prevIndex = 0;
    for (let i = 0; i < key.length; i += 1) {
      if("A" <= key[i] && key[i] <= "Z") {
        splitedNameArray.push(key.substring(prevIndex, i).toLowerCase());
        prevIndex = i;
      }
    }
    splitedNameArray.push(key.substring(prevIndex, key.length).toLowerCase());
    styleArray.push(`${splitedNameArray.join("-")}: ${value}`);
  });
  return `${selector} {\n${styleArray.join(";\n")};\n}`;
}
