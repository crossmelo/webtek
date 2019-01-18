<template>
<div class="index">
    <div class="index-main">
        <router-view />
        <!-- <keep-alive>
            <router-view />
        </keep-alive> -->
    </div>
    
    <div class="index-tab flex">
        <div class="index-item">
            <router-link to="/">聊天</router-link>
        </div>
        <div class="index-item">
            <router-link to="/contacts">通讯录</router-link>
        </div>
        <div class="index-item">
            <router-link to="/news">资讯</router-link>
        </div>
        <div class="index-item">
            <router-link to="/discover">发现</router-link>
        </div>
        <div class="index-item">
            <router-link to="/me">我</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        
    },
    mounted() {
        
    }
};
</script>

<style scoped>
.index {
    position: relative;
    height: 100%;
}

.index-main {
    padding-bottom: 1rem;
}

.index-tab {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}

.index-item {
    width: 20%;
    font-size: 0.5rem;
    color: #000;
    line-height: 1rem;
    text-align: center;
}
</style>
