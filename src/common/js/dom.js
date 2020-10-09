export function addClass (el, className) {
  if (hasClass(el, className)) {
    return false
  }
  el.classList.add(className)
}

function hasClass (el, className) {
  el.classList.contains(className)
}

export function getData (el, target, val) {
  let prefix = 'data-'
  target = prefix + target
  if (val) {
    return el.setAttribute(target, val)
  } else {
    return el.getAttribute(target)
  }
}
