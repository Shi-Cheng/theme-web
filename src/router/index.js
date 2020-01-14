import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: '',
      hidden: true,
      component: () => import('../views/login/index')
    },
    {
      path: '',
      name: '',
      component: Home,
      children: [{
        path: '',
        name: 'home',
        component: () => import('../views/index')
      }]
    },
    {
      name: 'theme_web',
      path: '/theme_web',
      component: Home,
      children: [
        {
          name: 'web_css',
          path: 'web_css',
          component: () => import('../views/web/css/index')
        },
        {
          name: 'JavaScript',
          path: 'web_javascript',
          component: () => import('../views/web/javascript/index')
        },
        {
          name: 'HTML',
          path: 'web_html',
          component: () => import('../views/web/html/index')
        }
      ]
    },
    {
      name: 'theme_develop',
      path: '/theme_develop',
      component: Home,
      // component: () => import('../views/develop/'),
      children: [
        {
          name: 'develop_java',
          path: 'develop_java',
          component: () => import('../views/develop/java/index')
        },
        {
          name: 'Android',
          path: 'develop_android',
          component: () => import('../views/develop/android/index')
        },
        {
          name: 'GoLang',
          path: 'develop_go',
          component: () => import('../views/develop/golang/index')
        },
        {
          name: 'Python',
          path: 'develop_python',
          component: () => import('../views/develop/python/index')
        }
      ]
    },
    {
      name: 'theme_tools',
      path: '/theme_tools',
      component: Home,
      children: [
        {
          name: 'tool_idea',
          path: 'tool_idea',
          component: () => import('../views/tools/idea')
        },
        {
          name: 'tool_webstorm',
          path: 'tool_webstorm',
          component: () => import('../views/tools/webstorm')
        },
        {
          name: 'tool_vscode',
          path: 'tool_vscode',
          component: () => import('../views/tools/vscode')
        },
        {
          name: 'tool_hbuilder',
          path: 'tool_hbuilder',
          component: () => import('../views/tools/hbuilder')
        }
      ]
    },
    {
      name: 'theme_system',
      path: '/theme_system',
      component: Home,
      children: [
        {
          name: 'user-manage',
          path: 'user-system',
          component: () => import('../views/system/user/index')
        },
        {
          name: 'menu-setting',
          path: 'menu_system',
          component: () => import('../views/system/menu/index')
        }
      ]
    },
    {
      path: '/about_us',
      component: Home,
      children: [{
        path: '',
        name: 'about_us',
        component: () => import('../views/contact/info/index')
      }]
    }
  ]
})
