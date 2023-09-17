import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/index.vue')
    },
    {
      path: '/pages/my/user',
      name: 'myuser',
      component: () => import('../views/My/MyUser.vue')
    },
    {
      path: '/pages/course/course-details',
      name: 'course-details',
      component: () => import('../views/Home/CourseDetails.vue')
    },
    {
      path: '/pages/search/search',
      name: 'search',
      component: () => import('../views/Search/index.vue'),
      meta: {
        title: '搜索页面'
      }
    },
    {
      path: '/loutry',
      name: 'loutry',
      component: () => import('../views/Loutry/index.vue'),
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/Home/index.vue'),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/pages/category/category',
          name: 'category',
          component: () => import('../views/Category/index.vue'),
          meta: {
            title: '分类'
          }
        },
        {
          path: '/pages/article/article',
          name: 'article',
          component: () => import('../views/Article/index.vue'),
          meta: {
            title: '阅读'
          }
        },
        {
          path: '/pages/question/question',
          name: 'question',
          component: () => import('../views/Question/index.vue'),
          meta: {
            title: '问答'
          }
        },
        {
          path: '/pages/my/my',
          name: 'my',
          component: () => import('../views/My/index.vue'),
          meta: {
            title: '我的'
          }
        }
      ]
    }
  ]
})

export default router
