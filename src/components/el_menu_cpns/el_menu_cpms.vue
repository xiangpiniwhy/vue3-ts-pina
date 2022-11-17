<template>
  <!--  isCollapse // 是否可折叠-->
  <!--  ellipsis 是否可省略多余的文字-->
  <!--  default-active //页面加载时默认激活菜单的 index-->
  <!--  collapse-transition //是否开启折叠动画-->
  <div class="el_menu_cpms">
    <el-menu
      :collapse="isCollapse"
      active-text-color="#ffd04b"
      background-color="#545c64"
      collapse-transition
      text-color="#fff"
    >
      <template v-for="item in roleMenus" :key="item.id">
        <el-sub-menu :index="item.id">
          <template #title>
            <el-icon>
              <component :is="item.icon.split('-icon-')[1]"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="childrens in item.children" :key="childrens.id">
            <el-menu-item :index="childrens.id">
              {{ item.name }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import useLoginStore from '@/stores/login/login'
import { computed, ref } from 'vue'

defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})
const loginStore = useLoginStore()
const roleMenus = computed(() => loginStore.roleMenus)
</script>

<style scoped lang="less">
.el-menu {
  border-right: none;
}
</style>
