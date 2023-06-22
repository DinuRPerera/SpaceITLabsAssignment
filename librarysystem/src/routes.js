
import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from './components/About.vue'
import Eresource from './components/Eresource.vue'


const router = new VueRouter({

    routes:[

        { path:"/aboutus", components:About},
        { path:"/eresource", components:Eresource}
    ]
});

export default router