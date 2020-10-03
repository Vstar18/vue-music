export function addClass (el, className) {
  if (hasClass(el, className)) {
    return false
  }
  el.classList.add(className)
}

function hasClass (el, className) {
  el.classList.contains(className)
}
