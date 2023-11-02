import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "@/components/HomePage.vue";


const routes = [
    {
        path: '/HomePage',
        name: 'HomePage',
        redirect:"/HomePage",
        component: HomePage,
        children: [
            { path: '', component: HomePage },
            { path:'/HOME',component: HomePage},
        ],
    },
];

const router= createRouter({
    // 4. 采用hash 模式
    history:
        createWebHashHistory(),
    // 采用 history 模式
    // history: createWebHistory(),
    routes, //使用上方定义的路由配置
});

export default router