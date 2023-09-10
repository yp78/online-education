<script setup lang="ts">
import { ref } from 'vue'
import { getUserApi } from '@/services/userApi'
import { useUserStore } from '@/stores/user.d'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'

const router = useRouter()
const store = useUserStore()
const yzm = ref<string | number>('获取验证码')
const agree = ref(false)
const username = ref('')
const password = ref('')
const onSubmit = async (values: { code: string; mobile: string }) => {
  if (!agree.value) {
    return showToast('请勾选用户协议')
  }
  const userRes = await getUserApi(values)
  console.log('userRes', userRes)
  store.setUser(userRes.data)
  router.push('/pages/my/my')
}
//获取验证码
const getCode = () => {
  setTimeout(() => {
    if (yzm.value == '获取验证码') {
      yzm.value = 60
    }
    if (yzm.value == 0) {
      yzm.value = '获取验证码'
      return
    }
    ;(yzm.value as number)--
    getCode()
  }, 1000)
}
</script>

<template>
  <div class="login-page">
    <div class="header"><van-icon name="cross" @click="$router.push('/loutry')" /></div>
    <div class="main">
      <h2>欢迎回来!</h2>
      <van-form autocomplete="off" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            label-align="top"
            v-model="username"
            name="mobile"
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
            name="code"
            label="验证码"
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请输入验证码' }]"
            ><template #button>
              <van-button
                size="small"
                type="primary"
                :disabled="yzm != '获取验证码'"
                :class="yzm != '获取验证码' ? 'a' : 'b'"
                @click="getCode"
                >{{ yzm }}</van-button
              >
            </template></van-field
          >
        </van-cell-group>
        <div style="margin: 16px">
          <van-button block native-type="submit"> 登录 </van-button>
        </div>
      </van-form>
    </div>
    <div class="p">
      <van-checkbox v-model="agree"
        >请认真阅读并同意 <span class="txt">《用户服务协议》 《隐私权政策》</span>
      </van-checkbox>
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
    .txt {
      color: #0877c1;
    }
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
    .a {
      width: 80px;
      background-color: var(--cp-dark);
    }
  }
}
</style>
