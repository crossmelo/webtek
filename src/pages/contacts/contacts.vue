<template>
<div class="contacts">
    <div class="contacts-top">
        <div class="contacts-top-title">聊天</div>
    </div>
    <div class="contacts-list">
        <div class="contacts-item" v-for="item in list" :key="item.id">
            <div class="contacts-item-main flex">
                <div class="contacts-item-avatar">
                    <!-- <img src=""> -->
                </div>
                <div class="contacts-item-content">{{item.first_name}}</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        };
    },
    methods: {
        getDialogs() {
            this.api
                .getDialogs()
                .then(res => {
                    console.log("getDialogssuccess")
                    console.log(res)
                    this.list = res.users
                })
                .catch(res => {
                    console.log("getDialogserror")
                    console.log(res)
                })
        },
    },
    mounted() {
        this.getDialogs()
    }
}
</script>

<style scoped>
.contacts-top {
    background: rgb(53, 53, 53);
}

.contacts-top-title {
    font-size: 0.6rem;
    color: #fff;
    line-height: 1rem;
    text-align: center;
}

.contacts-list {
    padding-left: 0.4rem;
}

.contacts-item {
    position: relative;
    border-bottom: 1px solid #ededed;
}

.contacts-item-main {}

.contacts-item-avatar {
    padding: 0.2rem 0.2rem 0.2rem 0;
    width: 1rem;
    height: 1rem;
}

.contacts-item-avatar img {
    border-radius: 4px;
}

.contacts-item-content {
    font-size: 0.5rem;
    color: #333;
    line-height: 0.8rem;
}
</style>
