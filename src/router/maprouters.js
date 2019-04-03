// 异步取到的路由 router.components的name 和 本地components map 做一个映射
const dynamicRouterMap = {
  'documentation/index': () => import(`@/views/documentation/index.vue`),
  'nested/menu1/index': () => import(`@/views/nested/menu1/index.vue`),
  'nested/menu2/index': () => import(`@/views/nested/menu2/index.vue`)
}

export default { dynamicRouterMap }
