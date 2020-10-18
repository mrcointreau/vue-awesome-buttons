import * as components from './components'

const VueAwesomeButtons = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default VueAwesomeButtons

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueAwesomeButtons)
}