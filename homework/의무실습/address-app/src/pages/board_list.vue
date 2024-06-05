<template lang="">
        <div class="container">
            <h2 class="my-3">
                Board List
            </h2>
            <div class="col p-3">
                <router-link class="btn btn-primary" to="/create">
                Create New Post
                </router-link>
            </div>
            <table class="table table-striped table-bordered table-hover">
            <thead>
                <tr class="table-dark text-white">
                    <th>id</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>email</th>
                    <th>gender</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data">
                    <td>{{item.id}}</td>
                    <td>{{item.first_name}} </td>
                    <td>{{item.last_name}} </td>
                    <td>{{item.email}}</td>
                    <td>{{item.gender}}</td>
                </tr>
            </tbody>
            </table>
        </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3001/youth');
        data.value = response.data; 
    } catch (error) {
        console.error('Error: ', error);
    }
});

</script>
<style lang="">

</style>