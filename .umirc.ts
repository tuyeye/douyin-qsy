import { defineConfig } from 'umi';

export default defineConfig({
  antd: {},
  dva: {},
  nodeModulesTransform: {
    type: 'none',
  },
  links: [
    {
      rel: 'icon',
      href:
        'https://gw.alipayobjects.com/mdn/afts/img/A*tF_ZT5B56RUAAAAAAAAAAABjARQnAQ/original?bz=rms',
      type: 'image/x-icon',
    },
  ],
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      title: '全网最好用到，免费的抖音无水印下载网站 - 彼岸花-抖音无水印解析',
    },
  ],
});
