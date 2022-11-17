<template>
  <div class="c-cpns-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="tabsValue" class="tabs">
      <!--      账号登录-->
      <el-tab-pane label="账号登录" name="account">
        <template #label>
          <span class="userFilled">
            <el-icon><UserFilled /></el-icon>
            <span style="margin-left: 5px">账号登录</span>
          </span>
        </template>
        <c_cpns_account ref="accountRef" />
      </el-tab-pane>

      <!--      手机登录-->
      <el-tab-pane label="手机登录" name="phone">
        <template #label>
          <span class="userFilled">
            <el-icon><Iphone /></el-icon>
            <span style="margin-left: 5px">手机登录</span>
          </span>
        </template>
        <c_cpns_phone />
      </el-tab-pane>
    </el-tabs>

    <div class="text">
      <el-checkbox v-model="account">忘记密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button
      style="width: 100%"
      type="primary"
      size="large"
      @click="handleLoginInfo"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import C_cpns_account from '@/views/login/c_cpns_panel/c_cpns_account/c_cpns_account.vue'
import C_cpns_phone from '@/views/login/c_cpns_panel/c_cpns_phone/c_cpns_phone.vue'
import { ref } from 'vue'

const account = ref<boolean>(false)

const tabsValue = ref<string>('account')

const accountRef = ref<InstanceType<typeof C_cpns_account>>()

function handleLoginInfo() {
  if (tabsValue.value === 'account') {
    accountRef.value!.loginAction()
  }
}
</script>

<style scoped lang="less">
.c-cpns-panel {
  width: 15%;
  margin-bottom: 200px;
  .tabs {
    margin-top: 20px;
    .userFilled .el-icon {
      vertical-align: middle;
    }
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }
}
</style>
