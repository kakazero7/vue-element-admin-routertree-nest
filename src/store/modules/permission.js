import { asyncRouterMap, constantRouterMap } from '@/router'
import DynamicRouterMap from '@/router/maprouters.js'
import Layout from '@/views/layout/Layout'
import axios from 'axios'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
// function hasPermission(roles, route) {
//   if (route.meta && route.meta.roles) {
//     return roles.some(role => route.meta.roles.includes(role))
//   } else {
//     return true
//   }
// }
var getRouter // 用来获取后台拿到的路由

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
// function filterAsyncRouter(routes, roles) {
//   const res = []
//
//   routes.forEach(route => {
//     const tmp = { ...route }
//     if (hasPermission(roles, tmp)) {
//       if (tmp.children) {
//         tmp.children = filterAsyncRouter(tmp.children, roles)
//       }
//       res.push(tmp)
//     }
//   })
//
//   return res
// }

const permission = {
  state: {
    routers: [],
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        // 调试用
        if (!getObjArr('router')) {
          axios.get('https://www.easy-mock.com/mock/5c9d875d1e74de5a7c1a30ca/admin-platform/routertree-nest').then(res => {
            // getRouter = res.data.data.router// 后台拿到路由
            console.log(res)
            const resRouter = res.data.data.router
            saveObjArr('router', resRouter) // 存储路由到localStorage
            const _getRouter = filterAsyncRouter(resRouter) // 过滤路由
            _getRouter.push({ path: '*', redirect: '/404', hidden: true })
            commit('SET_ROUTERS', _getRouter)
            resolve()
          })
        } else {
          getRouter = getObjArr('router')// 拿到路由
          const _getRouter = filterAsyncRouter(getRouter) // 过滤路由
          _getRouter.push({ path: '*', redirect: '/404', hidden: true })
          commit('SET_ROUTERS', _getRouter)
          resolve()
        }
      })
    }
  }
}

function saveObjArr(name, data) { // localStorage 存储数组对象的方法
  localStorage.setItem(name, JSON.stringify(data))
}

function getObjArr(name) { // localStorage 获取数组对象的方法
  return JSON.parse(window.localStorage.getItem(name))
}

function filterAsyncRouter(asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') { // Layout组件特殊处理
        route.component = Layout
      } else {
        route.component = DynamicRouterMap.dynamicRouterMap[route.component]
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })

  return accessedRouters
}

export default permission
