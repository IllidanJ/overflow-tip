import overflowTip from './v-overflow-tip'

const OverflowTip = {
  install(Vue) {
    Vue.directive('overflow-tip', overflowTip)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(OverflowTip)
}

export default OverflowTip
