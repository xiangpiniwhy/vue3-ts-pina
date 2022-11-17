<template>
  <div class="account">
    <el-form
      label-width="60px"
      :model="account"
      ref="formRef"
      :rules="accessRules"
      status-icon
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormRules } from 'element-plus'
import useLoginStore from '@/stores/login/login'
import type { ElForm } from 'element-plus'

const account = reactive({
  name: '',
  password: ''
})

const accessRules: FormRules = {
  name: [
    { pattern: /^\w+$/, message: '必须是字母', trigger: 'blur' },
    { required: true, message: '账号是必填', trigger: 'blur' }
  ],
  password: [
    { pattern: /^\d+$/, message: '必须是数字', trigger: 'blur' },
    { required: true, message: '密码是必填', trigger: 'blur' }
  ]
}
const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction() {
  formRef.value?.validate((valid) => {
    if (valid) {
      const name = account.name
      const password = account.password
      loginStore.loginAccessAction({ name, password })
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style scoped lang="less">
.account {
  margin-top: 10px;
}
</style>
