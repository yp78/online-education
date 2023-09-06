<script setup lang="ts">
import { ref } from 'vue'

const agree = ref()
const username = ref('')
const password = ref('')
const onSubmit = (values: any) => {
  console.log('submit', values)
}
</script>

<template>
  <div class="login-page">
    <div class="header"><van-icon name="cross" /></div>
    <div class="main">
      <h2>欢迎回来!</h2>
      <van-form autocomplete="off" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            label-align="top"
            v-model="username"
            name="手机号"
            label="手机号"
            placeholder="请输入手机号"
            :rules="[
              { required: true, message: '请输入手机号' },
              { pattern: /^(?:(?:\+|00)86)?1\d{10}$/, message: '手机号格式错误' }
            ]"
          />
          <van-field
            label-align="top"
            v-model="password"
            name="验证码"
            label="验证码"
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请输入验证码' }]"
            ><template #button>
              <van-button size="small" type="primary">获取验证码</van-button>
            </template></van-field
          >
        </van-cell-group>
        <div style="margin: 16px">
          <van-button block native-type="submit"> 登录 </van-button>
        </div>
      </van-form>
    </div>
    <div class="p">
      <van-checkbox v-model="agree">请认真阅读并同意 《用户服务协议》 《隐私权政策》</van-checkbox>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  padding: 15px 0;
  .van-button {
    background-color: var(--cp-main);
    color: #fff;
  }
  .header {
    color: var(--cp-text3);
    font-size: 1.3em;
    padding-left: 15px;
  }
  .p {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    font-size: 14px;
  }
  .main {
    width: 100%;
    position: absolute;
    top: 15%;
    h2 {
      padding-left: 20px;
      font-weight: 400;
    }
    :deep() {
      .van-form {
        padding: 0;
      }
      .van-cell {
        padding: 0;
        background-color: var(--cp-bg);
        margin-top: 15px;
      }
      .van-cell {
        &__title,
        &__value {
          padding: 5px 15px 0;
        }
      }
    }
  }
}
</style>
