<template lang="">
    <div>
        <h2 class="m-4">아날치 멤버</h2>
        <div class="container">
            <div class="row">
                <div class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
                        v-for="m in members" :key="m.id">
                    
                    <router-link :to="'/members/'+m.id">

                        <img class="img-thumbnail"
                        style="width:90px; height:110px;"
                        :src="m.photo" :title="m.name" /><br/>
                        <h6 class="display-7">{{m.name}}</h6>
                    </router-link>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import members from '@/members.json'

</script>
<style lang="">

</style>