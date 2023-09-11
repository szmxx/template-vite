/*
 * @Author: cola
 * @Date: 2023-09-12 00:05:56
 * @LastEditors: cola
 * @Description:
 */
export default {
  name: 'Vant',
  path: '/vant',
  redirect: '/vant/index',
  children: [
    {
      name: 'VantIndex',
      path: 'index',
      component: () => import('@/views/vant/index.vue'),
    },
  ],
}
