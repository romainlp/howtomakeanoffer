import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import WorkflowPlatforms from '@/components/Workflow/Platforms.vue'
import WorkflowAmount from '@/components/Workflow/Amount.vue'
import WorkflowResult from '@/components/Workflow/Result.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'home',
          component: WorkflowPlatforms,
          meta: { isWorkflow: false }
        },
        {
          path: 'amount',
          name: 'workflow-amount',
          component: WorkflowAmount,
          meta: { isWorkflow: true },
          beforeEnter (to, from, next) {
            if (store.state.selectedPlatform == undefined) {
              next('/')
            } else {
              next()
            }
          }
        },
        {
          path: 'result',
          name: 'workflow-result',
          component: WorkflowResult,
          meta: { isWorkflow: true },
          beforeEnter (to, from, next) {
            if (store.state.selectedPlatform == undefined) {
              next('/')
            } else if (store.state.amount == undefined) {
              next({ name: 'workflow-amount' })
            } else {
              next()
            }
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import(/* webpackChunkName: "guide" */ './views/Guide.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isWorkflow) {
    store.commit('RESET')
  }
  next()
})

export default router