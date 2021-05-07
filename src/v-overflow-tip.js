import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
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
  const tippyOptions = {
    content: binding.value,
    trigger: 'manual',
    placement: 'top-start'
  }
  el._tippyInstance = tippy(el)
  el._tippyInstance.setProps(tippyOptions)
  el.addEventListener('mouseenter', directive.handleCellMouseEnter)
  el.addEventListener('mouseleave', directive.handleCellMouseLeave)
}
export default directive
