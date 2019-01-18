<template>
<div class="login">
    <div class="login-phone" v-show="state">
        <div class="login-phone-input">
            <input type="tel" placeholder="请输入手机号" v-model="phone">
        </div>
        <div class="login-phone-button" @click="sendCode">
            <img src="../assets/images/login_arrow.png">
        </div>
    </div>
    <div class="login-code" v-show="!state">
       <div class="login-code-input">
            <input type="tel" placeholder="请输入验证码" v-model="code">
        </div>
        <div class="login-code-button" @click="signIn">
            <img src="../assets/images/login_arrow.png">
        </div>
        <div class="login-code-back" @click="backEvent">
            <img src="../assets/images/login_back.png">
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            phone: "",
            code: "",
            state: true
        }
    },
    methods: {
        sendCode() {
            this.api
                .sendCode("+86" + this.phone)
                .then(res => {
                    console.log("sendCodesuccess")
                    console.log(res)
                    this.state = false
                })
                .catch(res => {
                    console.log("sendCodeerror")
                    console.log(res)
                })
        },

        signIn() {
            this.api
                .signIn("+86" + this.phone, this.code)
                .then(res => {
                    console.log("signInsuccess")
                    console.log(res)
                    this.$toast("登录成功！")
                    let redirect = decodeURIComponent(
                      this.$route.query.redirect || "/"
                    )
                    this.$router.push({
                      path: redirect
                    })
                    // this.$router.push({
                    //     path: "/"
                    // })
                })
                .catch(res => {
                    console.log("signInerror")
                    console.log(res)
                })
        },
        backEvent() {
            this.state = true;
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            document.title = "登录"
        });
    },
    mounted() {}
};
</script>

<style scoped>
.login {
    height: 100%;
}

.login-phone,
.login-code {
    padding-top: 50%;
}

.login-phone-input,
.login-code-input {
    margin: 0 20%;
    width: 60%;
    border-bottom: 1px solid #333;
}

.login-phone-input input,
.login-code-input input {
    padding: 0.2rem 4%;
    width: 92%;
    font-size: 0.6rem;
    color: #333;
    line-height: 0.8rem;
    text-align: center;
}

.login-phone-button,
.login-code-button {
    margin: 1rem auto 0;
    width: 20%;
}

.login-code-back {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0.3rem 0.2rem;
    width: 10%;
}
</style>
