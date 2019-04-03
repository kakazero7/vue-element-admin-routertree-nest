<template>

  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
    >
      <div class="menu-wrapper">
        <li
          role="menuitem"
          tabindex="-1"
          class="el-menu-item submenu-title-noDropdown"
          style="padding-left: 20px; color: rgb(191, 203, 217); background-color: rgb(48, 65, 86);">

        <search class="right-menu-item"/></li>
      </div>

      <sidebar-item v-for="route in permission_routers" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import Search from '@/components/HeaderSearch'
import variables from '@/styles/variables.scss'

export default {
  components: {
    SidebarItem,
    Search
  },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
