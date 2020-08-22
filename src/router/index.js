import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import AdminSignIn from '../views/AdminSignIn.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/tweets'
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/admin/signin',
    name: 'AdminSignIn',
    component: AdminSignIn
  },
  {
    path: '/tweets',
    name: 'Tweets',
    component: () => import('../views/Tweets.vue')

  },
  {
    path: '/tweets/:id',
    name: 'Tweet',
    component: () => import('../views/Tweet.vue')
  },
  {
    path: '/users/:id/tweets',
    name: 'UserTweets',
    component: () => import('../views/UserTweets.vue')
  },
  {
    path: '/users/:id/replies',
    name: 'UserReplies',
    component: () => import('../views/UserReplies.vue')
  },
  {
    path: '/users/:id/likes',
    name: 'UserLikes',
    component: () => import('../views/UserLikes.vue')
  },
  {
    path: '/users/:id/followings',
    name: 'UserFollowings',
    component: () => import('../views/UserFollowings.vue')
  },
  {
    path: '/users/:id/followers',
    name: 'UserFollowers',
    component: () => import('../views/UserFollowers.vue')
  },
  {
    path: '/users/:id/edit',
    name: 'EditUser',
    component: () => import('../views/EditUser.vue')
  },


  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }

]

const router = new VueRouter({
  routes
})

export default router
