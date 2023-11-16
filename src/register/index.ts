import { App } from 'vue'
import './registerStyle'
import { install as installRouter } from '@/route'
import { install as installStore } from '@/store'
import installProperty from './registerProperty'
import installDirective from './directives/index'
export default (app: App) => {
  installRouter(app)
  installStore(app)
  installDirective(app)
  installProperty(app)
}
