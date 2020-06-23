<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="旧密码" prop="old_password">
        <el-input
          v-model="form.old_password"
          type="password"
          auto-complete="off"
          placeholder="请输入旧密码"
        />
      </el-form-item>
      <el-form-item label="新密码" prop="new_password">
        <el-input
          v-model="form.new_password"
          type="password"
          auto-complete="off"
          placeholder="请输入新密码"
        />
      </el-form-item>
      <el-form-item label="确认密码" prop="new_password_confirmation">
        <el-input
          v-model="form.new_password_confirmation"
          type="password"
          auto-complete="off"
          placeholder="请输入确认密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保 存</el-button>
        <el-button @click="onCancel">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { postPassword } from '@/api/auth'

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.name + '为必填项',
          type: 'error'
        })
        callback(new Error(rule.name + '为必填项'))
      } else {
        callback()
      }
    }
    return {
      form: {
        old_password: '',
        new_password: '',
        new_password_confirmation: ''
      },
      rules: {
        old_password: [
          { trigger: 'blur', validator: validateRequire, name: '旧密码' }
        ],
        new_password: [
          { trigger: 'blur', validator: validatePass, name: '新密码' }
        ],
        new_password_confirmation: [
          { trigger: 'blur', validator: validatePass, name: '确认密码' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          postPassword(this.form)
            .then(response => {
              if (response.code === 200) {
                this.$notify({
                  title: '成功',
                  message: '保存成功',
                  type: 'success',
                  duration: 2000
                })
                this.$store.dispatch('LogOut').then(() => {
                  location.reload() // 为了重新实例化vue-router对象 避免bug
                })
              }
            })
            .catch(err => {
              console.log(err)
            })

          this.loading = false
        }
        return false
      })
    },
    onCancel() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

