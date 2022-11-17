<template>
  <div class="page_header">
    <div class="breadcrumb">
      <el-icon :size="25" style="margin-right: 10px" @click="handleIcon">
        <component :is="isIcon ? 'Expand' : 'Fold'" />
      </el-icon>
      <div>面包屑</div>
    </div>
    <div>个人信息</div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from 'vue'

const emits = defineEmits(['handleIconEmit'])
const isIcon = ref<boolean>(true)
const handleIcon = () => {
  isIcon.value = !isIcon.value
  emits('handleIconEmit', isIcon.value)
}
</script>

<style scoped lang="less">
.page_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 60px;
  font-size: 20px;
  .breadcrumb {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
