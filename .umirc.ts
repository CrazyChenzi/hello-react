import { defineConfig } from 'umi';
import layout from './src/config/layout';
import routes from './src/config/router';

const { ...restLayoutConfig } = layout;

export default defineConfig({
  locale: { antd: true },
  layout: restLayoutConfig,
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
});
