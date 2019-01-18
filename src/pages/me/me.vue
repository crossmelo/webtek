<template>
    <div class="me">
        <div class="me-button" @click="logOut"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        logOut() {
            this.api
                .logOut()
                .then(res => {
                    console.log("logOutssuccess")
                    console.log(res)
                })
                .catch(res => {
                    console.log("logOutserror")
                    console.log(res)
                })
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
.me-button {
    width: 30%;
    height: 2rem;
    background: #333;
}
</style>
