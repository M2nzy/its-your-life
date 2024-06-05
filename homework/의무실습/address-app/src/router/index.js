
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Create from '@/pages/board_create.vue'
import List from '@/pages/board_list.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', name: "Home", component: Home },
        { path: '/list', name: "List", component: List },
        { path: '/Create', name: "Create", component: Create },
    ]
})

export default router;