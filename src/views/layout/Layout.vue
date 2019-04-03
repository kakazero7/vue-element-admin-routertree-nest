<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <div class="top">
        <navbar/>
        <tags-view/>
      </div>
      <div class="center">
        <app-main/>
      </div>
      <div class="bottom">
        <el-row type="flex" justify="end">
          <el-col :span="4"><div>业务日期：2010-4-9</div></el-col>
          <span class="line"/>
          <el-col :span="4"><div>当前单位：单位名称</div></el-col>
          <span class="line"/>
          <el-col :span="4"><div>默认设置</div></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

</style>

<style rel="stylesheet/scss" lang="scss">
  html, body, .main-container {
    height: 100%;
  }

  .main-container > div {
    position: absolute;
  }

  .main-container .top {
    top: 0;
    height: 84px;
    width: 100%;
  }

  .main-container .bottom {
    bottom: 0;
    height: 60px;
    line-height: 60px;
    width: 100%;
    text-align: center;
    color: #909399;
    font-size: 18px;
  }

  .main-container .center {
    bottom: 60px;
    top: 84px;
    width: 100%;
    overflow: auto;
  }
  .line{
    height: 60px;
    width:2px;
    background-color: #E4E7ED;
    margin-left: 40px;
  }
</style>
