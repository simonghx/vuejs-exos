import Vue from 'vue';
import Router from 'vue-router';
import exo1 from "./views/Exo1.vue";
import exo2 from "./views/Exo2.vue";
import exo3 from "./views/Exo3.vue";
import exo4 from "./views/Exo4.vue";
import exo5 from "./views/Exo5.vue";
import exo6 from "./views/Exo6.vue";
import exo7 from "./views/Exo7.vue";


Vue.use(Router);

export default new Router({
    routes: [{
            path: '/exo1',
            name: 'exo1',
            component: exo1,

        },
        {
            path: '/exo2',
            name: 'exo2',
            component: exo2,

        },
        {
            path: '/exo3',
            name: 'exo3',
            component: exo3,
        },
        {
            path: '/exo4',
            name: 'exo4',
            component: exo4,
        },
        {
            path: '/exo5',
            name: 'exo5',
            component: exo5,
        },
        {
            path: '/exo6',
            name: 'exo6',
            component: exo6,
        },
        {
            path: '/exo7',
            name: 'exo7',
            component: exo7,
        },
    ],
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    mode: "history"
});