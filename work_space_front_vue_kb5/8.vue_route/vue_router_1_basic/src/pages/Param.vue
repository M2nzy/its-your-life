<template>
    <div class="card card-body">
        <h2>Param Test</h2>
        route : {{ $route }} <hr><br>
        route.fullPath : {{ $route.fullPath }} <br>
        route.path : {{ $route.path }} <br>
        route.query : {{ $route.query }} <br>
        route.query.param1 : {{ $route.query.param1 }} <br>
        route.query.param2 : {{ $route.query.param2 }} <br>

        <h2>Router Test</h2>
        <button @click="goPush">go about(push)</button>
        <button @click="goReplace">go home(replace)</button>
        <button @click="goPrevPage">이전 페이지(back, go)</button>
        <br><br><br><br><br><br>
        <br><br><br><br><br><br>
    </div>
</template>

<script setup>
// script setup에서 route 객체 활용하는 방법
import {useRoute, useRouter} from 'vue-router'
// useRoute(route) : 해당 페이지의 url정보를 담고 있는 객체(로컬 정보!)
//                   -> 현재 페이지의 path, query, param 정보를 조회 할때 사용!
// useRouter(router) : router/index에서 생성한 router 정보로 모든 라우팅 정보를 담은 객체
//                   -> 라우터 전용 메소드 활용 ex)push, go, back, replace
//console.log(this.$route);
const router = useRouter();
const goPush = () => {
    //router.push('/about');
    router.push({path:'/about'});

}
const goReplace = () => {
    router.replace({name:'home'});
    
}
const goPrevPage = () => {
    router.back();

}

</script>
