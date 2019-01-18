<template>
    <div class="discover">
        <div class="discover-button" @click="relogIn"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        relogIn() {
            this.api
                .relogIn()
                .then(res => {
                    console.log("relogInssuccess")
                    console.log(res)
                })
                .catch(res => {
                    console.log("relogInserror")
                    console.log(res)
                })
        }
    },
    mounted() {
        
    }
}
</script>

<style scoped>
.discover-button {
    width: 30%;
    height: 2rem;
    background: #333;
}
</style>
