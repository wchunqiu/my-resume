<template>
    <div class="contact">
        <div class="header">
            <h1>吴春秋的个人简介</h1>
        </div>
        <div class="body">
            <div class="bodyContect">
                <div class="left">
                    <div class="li1" @click="gologin">
                        <img src="../assets/头像.jpg" alt="" class="personPhotot">
                        <div class="leftTitle">吴春秋</div>
                    </div>
                    <div class="li2" @click="gopageone">
                        <img src="../assets/jineng.png" alt="" class="tubiao">
                        <div class="leftTitle">技能</div>
                    </div>
                    <div class="li3" @click="goaboutpage">
                        <img src="../assets/guanyu.png" alt="" class="tubiao">
                        <div class="leftTitle">关于</div>
                    </div>
                    <div class="li4" @click="gohobby">
                        <img src="../assets/aihao.png" alt="" class="tubiao">
                        <div class="leftTitle">爱好</div>
                    </div>
                    <div class="li5" @click="gocontact">
                        <img src="../assets/shouji.png" alt="" class="tubiao">
                        <div class="leftTitle">联系</div>
                    </div>
                </div>
                <div class="right">
                    <div class="righttop"></div>
                    <div class="rightcontact">
                        <div class="right1">
                            <div class="right2">
                                <div class="writing">电话</div>
                                <img src="../assets/shouji.png" alt="" class="tubiao1">
                            </div>
                            <div class="writing1">19815162307</div>
                        </div>
                        <div class="right1">
                             <div class="right2">
                                <div class="writing">微信</div>
                                <img src="../assets/weixin.png" alt="" class="tubiao1">
                            </div>
                            <div class="writing1">19815162307</div>
                        </div>
                        <div class="right1">
                             <div class="right2">
                                <div class="writing">邮箱</div>
                                <img src="../assets/youxiang.png" alt="" class="tubiao1">
                            </div>
                            <div class="writing1">1152569067@qq.com</div>
                        </div>
                        <div class="right1">
                             <div class="right2">
                                <div class="writing">位置</div>
                                <img src="../assets/weizhi.png" alt="" class="tubiao1">
                            </div>
                            <div class="writing1">江苏无锡</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        gologin(){
            this.$router.push({path:'/'},()=>{

            })
        },
        gopageone(){
            this.$router.push({path:'/pageone'},()=>{
                
            })
        },
        goaboutpage(){
            this.$router.push({path:'/aboutpage'},()=>{
                
            })
        },
        gohobby(){
            this.$router.push({path:'/hobby'},()=>{
                
            })
        },
        gocontact(){
            this.$router.push({path:'/contact'},()=>{
                
            })
        }
    }
}
</script>
<style  scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
    .contact{
        background-image: url('../assets/1.webp');
        width: 100%;
        height: 100%;
        
    }
    .bodyContect{
        
       display: flex;
       background-color: rgb(234, 240, 240);
       width: 80%;
       height:630px;
       border-radius: 15px;
    }
    .body{
        display: flex;
        justify-content: center;
        width: 100%;  
    }
    .left{
        flex: 1;
        border-radius: 15px;
    }
    .right{
        flex: 2;
        border-top-right-radius: 15px;
         border-bottom-right-radius: 15px;
        background-color: rgb(191, 233, 233);
    }
    .li1{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 200px;
        margin: 5px;
        border-radius: 30px;
    }
    .li2{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        margin: 5px;
        border-radius: 30px;
    }
     .li3{
        
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        margin: 5px;
        border-radius: 30px;
    }
     .li4{
        
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        margin: 5px;
        border-radius: 30px;
    }
     .li5{
       background-color: rgb(245, 246, 246);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        margin: 5px;
        border-radius: 30px;
    }
    
    .li1:hover{
        cursor: pointer;
        background-color: rgb(245, 245, 246);
    }
    .li2:hover{
        cursor: pointer;
        background-color: rgb(245, 246, 246);
    }
     .li3:hover{
        cursor: pointer;
        background-color: rgb(245, 246, 246);
    }
     .li4:hover{
        cursor: pointer;
        background-color: rgb(245, 246, 246);
    }
     .li5:hover{
        cursor: pointer;
        background-color: rgb(245, 246, 246);
    }
    .li1:hover .leftTitle{
        color: rgb(81, 248, 242);
    }
    .li2:hover .leftTitle{
        color: aqua;
    }
     .li3:hover .leftTitle{
        color: aqua;
    }
     .li4:hover .leftTitle{
        color: aqua;
    }
     .li5:hover .leftTitle{
        color: aqua;
    }
    .li2:hover{
        cursor: pointer;
        background-color: rgb(245, 246, 246);
    }
    .personPhotot{
        width: 5vw;
        height: 5vw;
        border-radius: 50%;
        margin-bottom: 5px;
    }
    .tubiao{
        margin-right: 20px;
        width: 2vw;
        height: 2vw;
    }
    .tubiao1{
        margin-right: 20px;
        width: 3vw;
        height: 3vw;
    }
    .leftTitle{
        font-weight: 700;
        font-size: 1.3vw;
    }
    .rightcontact{
        width: 70%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-top: 30px;
        margin-left: 60px;
    }
    .right2{
        display: flex;
        
        align-items: center;
    }
    .writing{
        font-size: 2vw;
        margin-right: 20px;
        
    }
    .writing1{
        margin-top: 10px;
        color: rgb(99, 109, 114);
    }
    .righttop{
        height: 20%;
    }
    .right1{
        flex: 1;
    }
   
   
</style>