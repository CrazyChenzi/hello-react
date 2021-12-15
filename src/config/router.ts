import { IConfigFromPlugins } from '@/.umi/core/pluginConfig';

type Routes = Pick<IConfigFromPlugins, 'routes'>;

const router: Routes = {
  routes: [
    { path: '/', name: '首页', component: '@/pages/index' },
    { path: '/products', name: '测试页', component: '@/pages/products/index' },
  ],
};

export default router.routes;
