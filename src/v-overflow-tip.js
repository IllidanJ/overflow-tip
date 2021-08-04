import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
const defaultOptions = {
  trigger: 'manual',
  placement: 'top-start',
  maxWidth: 'none'
}
const directive = {
  inserted(el, binding) {
    init(el, binding)
  },
  handleCellMouseEnter(event) {
    const cellChild = event.target
    if (cellChild.scrollWidth > cellChild.offsetWidth) {
      cellChild._tippyInstance && cellChild._tippyInstance.show()
    }
  },
  handleCellMouseLeave(event) {
    const cellChild = event.target
    cellChild._tippyInstance && cellChild._tippyInstance.hide()
  },
  componentUpdated(el, binding) {
    init(el, binding)
  },
  unbind(el) {
    el._tippyInstance && el._tippyInstance.destroy()
  }
}
function init(el, binding) {
  if (el.scrollWidth <= el.offsetWidth) return
  const customOptions =
    typeof binding.value === 'object'
      ? binding.value
      : { content: binding.value }
  const tippyOptions = Object.assign({}, defaultOptions, customOptions)

  el._tippyInstance = tippy(el)
  el._tippyInstance.setProps(tippyOptions)
  el.addEventListener('mouseenter', directive.handleCellMouseEnter)
  el.addEventListener('mouseleave', directive.handleCellMouseLeave)
}
export default directive
