<template>
  <div class="main">
    <el-container>
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <!--          // 菜单页面栏-->
        <El_menu_cpms :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <!--          header头部面包屑-->
          <page_header @handleIconEmit="handleIconEmit" />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import El_menu_cpms from '@/components/el_menu_cpns/el_menu_cpms.vue'
import Page_header from '@/components/page_header/page_header.vue'
import { ref } from 'vue'

const isCollapse = ref()
const handleIconEmit = (val: boolean) => {
  isCollapse.value = val
}
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
    .el-aside {
      overflow-y: auto;
      overflow-x: hidden;
      cursor: pointer;
      -ms-overflow-style: none;
      background-color: #545c64 !important;
      transition: width 0.2s ease;
    }
  }
}
</style>
