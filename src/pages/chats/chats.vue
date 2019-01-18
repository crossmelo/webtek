<template>
<div class="chats">
    <div class="chats-top">
        <div class="chats-top-title">聊天</div>
    </div>
    <div class="chats-list">
        <div class="chats-item" v-for="item in list" :key="item.id">
            <div class="chats-item-main flex">
                <div class="chats-item-avatar">
                    <!-- <img src=""> -->
                </div>
                <div class="chats-item-content">
                    <div class="chats-item-name">{{item.from_id}}</div>
                    <div class="chats-item-text ell">{{item.message}}</div>
                </div>
            </div>

            <div class="chats-item-time">{{item.date}}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            messagesList: [],
            userList: []
        }
    },
    methods: {
        checkLogin() {
            this.api
                .checklogin()
                .then(res => {
                    console.log("checkloginssuccess");
                    if (res == 1) {
                        this.$router.push({
                            path: "/login",
                            query: {
                                redirect: this.$router.fullPath
                            }
                        });
                    } else {
                        // this.getDialogs()
                        // this.getState()
                        this.getNearestDc()
                    }
                })
                .catch(res => {
                    console.log("checkloginserror");
                    console.log(res);
                });
        },

        getDialogs() {
            this.api
                .getDialogs()
                .then(res => {
                    console.log("getDialogssuccess")
                    console.log(res)
                    this.list = res.messages
                    this.userList = res.users

                    // this.getUsers()
                    this.getFullUser()

                    this.getFile(res.messages[1].media.photo.sizes[0].location)
                })
                .catch(res => {
                    console.log("getDialogserror")
                    console.log(res.users)
                })
        },

        getNearestDc() {
            this.api
                .getNearestDc()
                .then(res => {
                    console.log("getNearestDcsuccess")
                    console.log(res)

                    this.getDialogs()
                })
                .catch(res => {
                    console.log("getNearestDcerror")
                    console.log(res)
                })
        },

        getState() {
            this.api
                .getState()
                .then(res => {
                    console.log("getStatesuccess")
                    console.log(res)
                })
                .catch(res => {
                    console.log("getStateerror")
                    console.log(res)
                })
        },
        getFullUser() {
            let id = 777000
            this.api
                .getFullUser(id)
                .then(res => {
                    console.log("getFullUsersuccess")
                    console.log(res)
                })
                .catch(res => {
                    console.log("getFullUsererror")
                    console.log(res)
                })
        },
        getFile(location) {
            let inputLocation = {
                dc_id: location.dc_id,
                local_id: location.local_id,
                secret: location.secret,
                volume_id: location.volume_id,
                _: "inputFileLocation"
            }
            this.api
                .getFile(inputLocation)
                .then(res => {
                    console.log("getFilesuccess")
                    console.log(res)
                })
                .catch(res => {
                    console.log("getFileerror")
                    console.log(res)
                })
        },

        filterMsg(data) {
            return data.map(function (item, index, arr) {
                console.log(this)
                console.log("原数组arr：", arr) //注意这里执行5次

                return {
                    date: item.date
                }
            }, this)
        }
    },
    mounted() {
        this.checkLogin()
    }
};
</script>

<style scoped>
.chats {}

.chats-top {
    background: rgb(53, 53, 53);
}

.chats-top-title {
    font-size: 0.6rem;
    color: #fff;
    line-height: 1rem;
    text-align: center;
}

.chats-list {
    padding-left: 0.4rem;
}

.chats-item {
    position: relative;
    border-bottom: 1px solid #ededed;
}

.chats-item-main {}

.chats-item-avatar {
    padding: 0.2rem 0.2rem 0.2rem 0;
    width: 1rem;
    height: 1rem;
}

.chats-item-avatar img {
    border-radius: 4px;
}

.chats-item-content {}

.chats-item-name {
    font-size: 0.5rem;
    color: #333;
    line-height: 0.8rem;
}

.chats-item-text {
    width: 100%;
    font-size: 0.4rem;
    color: #666;
    line-height: 0.6rem;
}

.chats-item-time {
    position: absolute;
    top: 0;
    right: 0.4rem;
    font-size: 0.4rem;
    color: #666;
    line-height: 0.6rem;
}
</style>
