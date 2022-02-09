<!-- 组件说明 -->
<template>
  <div class="container-box">
    <div class="cotn_principal">
      <div class="cont_centrar">
        <div class="cont_login">
          <div class="cont_info_log_sign_up">
            <div class="col_md_login">
              <div class="cont_ba_opcitiy">
                <h2>LOGIN</h2>
                <p></p>
                <button class="btn_login" @click="cambiar_login()">
                  LOGIN
                </button>
              </div>
            </div>
            <div class="col_md_sign_up">
              <div class="cont_ba_opcitiy">
                <h2>SIGN UP</h2>
                <p></p>
                <button class="btn_sign_up" @click="cambiar_sign_up()">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
          <div class="cont_back_info">
            <div class="cont_img_back_grey">
              <img src="../../assets/img/po.jpeg" alt="" />
            </div>
          </div>
          <div class="cont_forms">
            <div class="cont_img_back_">
              <img src="../../assets/img/po.jpeg" alt="" />
            </div>
            <div class="cont_form_login">
              <a href="javascript:;" @click="ocultar_login_sign_up()">
                <div><svg-icon icon="left-arrow" /></div>
              </a>
              <h2>LOGIN</h2>
              <el-form
                label-position="top"
                :model="loginData"
                :rules="ruleLogin"
                style="width: 260px"
                ref="loginFormRef"
              >
                <el-form-item label="username" prop="username">
                  <el-input
                    v-model="loginData.username"
                    placeholder="username"
                    name="username"
                  ></el-input>
                </el-form-item>
                <el-form-item
                  label="password"
                  style="margin-top: 0"
                  prop="password"
                >
                  <el-input
                    v-model="loginData.password"
                    placeholder="password"
                    name="password"
                  ></el-input>
                </el-form-item>
                <el-button type="primary" @click="onSubmit(ruleFormRef)" :loading="loadingState">
                  LOGIN
                </el-button>
              </el-form>
            </div>
            <div class="cont_form_sign_up">
              <a href="javascript:;" @click="ocultar_login_sign_up()">
                <svg-icon icon="left-arrow" />
              </a>
              <h2>SIGN UP</h2>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="User" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button class="btn_sign_up" @click="cambiar_sign_up()">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import { valid } from './rule';

import { useStore } from 'vuex';
const store = useStore();
const loginFormRef = ref(null);
const loadingState = ref(false);
const onSubmit = () => {
  loginFormRef.value.validate(valid => {
    if (!valid) {
      return false;
    }
    loadingState.value = true;
    store.dispatch('user/login', loginData.value).then(res => {
      ElMessage({
        showClose: true,
        message: '登录成功',
        type: 'success',
      });
    }).finally(_ => {
      loadingState.value = false;
    });
  });
};
const loginData = ref({
  username: '',
  password: '',
});

const ruleLogin = ref({
  username: [
    { required: true, trigger: ['blur', 'change'], message: '请输入正确账号' },
  ],
  password: [
    {
      required: true,
      trigger: ['blur', 'change'],
      message: '请输入正确密码',
      validate: valid(),
    },
  ],
});


const cambiar_login = () => {
  document.querySelector('.cont_forms').className =
    'cont_forms cont_forms_active_login';
  document.querySelector('.cont_form_login').style.display = 'block';
  document.querySelector('.cont_form_sign_up').style.opacity = '0';

  setTimeout(function () {
    document.querySelector('.cont_form_login').style.opacity = '1';
  }, 400);

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.display = 'none';
  }, 200);
};

const cambiar_sign_up = () => {
  document.querySelector('.cont_forms').className =
    'cont_forms cont_forms_active_sign_up';
  document.querySelector('.cont_form_sign_up').style.display = 'block';
  document.querySelector('.cont_form_login').style.opacity = '0';

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.opacity = '1';
  }, 100);

  setTimeout(function () {
    document.querySelector('.cont_form_login').style.display = 'none';
  }, 400);
};
const ocultar_login_sign_up = () => {
  document.querySelector('.cont_forms').className = 'cont_forms';
  document.querySelector('.cont_form_sign_up').style.opacity = '0';
  document.querySelector('.cont_form_login').style.opacity = '0';

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.display = 'none';
    document.querySelector('.cont_form_login').style.display = 'none';
  }, 500);
};
</script>

<style lang="scss" scoped>
$bg: red;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

* {
  margin: 0px auto;
  padding: 0px;
  text-align: center;
  font-family: 'Lato', sans-serif;
}

.cotn_principal {
  position: absolute;
  width: 100%;
  height: 100%;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cfd8dc+0,607d8b+100,b0bec5+100 */
  background: #aac4bc; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #aac4bc 0%,
    #eca8a8 100%,
    #eed5a9 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #aac4bc 0%,
    #eca8a8 100%,
    #eed5a9 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #aac4bc 0%,
    #eca8a8 100%,
    #eed5a9 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfd8dc', endColorstr='#b0bec5',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.cont_centrar {
  position: relative;
  float: left;
  width: 100%;
}

.cont_login {
  position: relative;
  width: 640px;
  left: 50%;
  margin-left: -320px;
}

.cont_back_info {
  position: relative;
  float: left;
  width: 640px;
  height: 280px;
  overflow: hidden;
  background-color: #fff;
  margin-top: 100px;
  box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
}

.cont_forms {
  position: absolute;
  overflow: hidden;
  top: 100px;
  left: 0px;
  width: 320px;
  height: 280px;
  background-color: #eee;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_forms_active_login {
  box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
  height: 420px;
  top: 20px;
  left: 0px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_forms_active_sign_up {
  box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
  height: 420px;
  top: 20px;
  left: 320px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_img_back_grey {
  position: absolute;
  width: 950px;
  top: -80px;
  left: -116px;
}

.cont_img_back_grey > img {
  width: 100%;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  opacity: 0.2;
  animation-name: animar_fondo;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.cont_img_back_ {
  position: absolute;
  width: 950px;
  top: -80px;
  left: -116px;
}

.cont_img_back_ > img {
  width: 100%;
  opacity: 0.3;
  animation-name: animar_fondo;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.cont_forms_active_login > .cont_img_back_ {
  top: 0px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_forms_active_sign_up > .cont_img_back_ {
  top: 0px;
  left: -435px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_info_log_sign_up {
  position: absolute;
  width: 640px;
  height: 280px;
  top: 100px;
  z-index: 1;
}

.col_md_login {
  position: relative;
  float: left;
  width: 50%;
}

.col_md_login > h2 {
  font-weight: 400;
  margin-top: 70px;
  color: #757575;
}

.col_md_login > p {
  font-weight: 400;
  margin-top: 15px;
  width: 80%;
  color: #37474f;
}

.btn_login {
  background-color: #ff9800;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius: 3px;
  box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.4);
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
}

.col_md_sign_up {
  position: relative;
  float: left;
  width: 50%;
}

.cont_ba_opcitiy > h2 {
  font-weight: 400;
  color: #fff;
}

.cont_ba_opcitiy > p {
  font-weight: 400;
  margin-top: 15px;
  color: #fff;
}
/* ----------------------------------
background text
------------------------------------
 */
.cont_ba_opcitiy {
  position: relative;
  background-color: rgba(187, 168, 170, 0.79);
  width: 80%;
  border-radius: 3px;
  margin-top: 60px;
  padding: 15px 0px;
}

.btn_sign_up {
  background-color: #f44336;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius: 3px;
  box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.4);
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
}
.cont_forms_active_sign_up {
  z-index: 2;
}

@-webkit-keyframes animar_fondo {
  from {
    -webkit-transform: scale(1) translate(0px);
    -moz-transform: scale(1) translate(0px);
    -ms-transform: scale(1) translate(0px);
    -o-transform: scale(1) translate(0px);
    transform: scale(1) translate(0px);
  }
  to {
    -webkit-transform: scale(1.5) translate(50px);
    -moz-transform: scale(1.5) translate(50px);
    -ms-transform: scale(1.5) translate(50px);
    -o-transform: scale(1.5) translate(50px);
    transform: scale(1.5) translate(50px);
  }
}
@-o-keyframes identifier {
  from {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  }
}
@-moz-keyframes identifier {
  from {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  }
}
@keyframes identifier {
  from {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  }
}
.cont_form_login {
  position: absolute;
  opacity: 0;
  display: none;
  width: 320px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_forms_active_login {
  z-index: 2;
}
.cont_forms_active_login > .cont_form_login {
}

.cont_form_sign_up {
  position: absolute;
  width: 320px;
  float: left;
  opacity: 0;
  display: none;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_form_sign_up > input {
  text-align: left;
  padding: 15px 5px;
  margin-left: 10px;
  margin-top: 20px;
  width: 260px;
  border: none;
  color: #757575;
}

.cont_form_sign_up > h2 {
  margin-top: 50px;
  font-weight: 400;
  color: #757575;
}

.cont_form_login > input {
  padding: 15px 5px;
  margin-left: 10px;
  margin-top: 20px;
  width: 260px;
  border: none;
  text-align: left;
  color: #757575;
}

.cont_form_login > h2 {
  margin-top: 110px;
  font-weight: 400;
  color: #757575;
}
.cont_form_login > a,
.cont_form_sign_up > a {
  color: #757575;
  position: relative;
  float: left;
  margin: 10px;
  margin-left: 30px;
}
</style>
