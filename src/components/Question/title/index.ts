/**
 * @description 问卷标题
 */

import TitleComponent from './TitleComponent';
import { titleDefaultConfig } from './interface';
export * from './interface';
// 组件的配置
export default {
  title: '输入框',
  type: 'title',
  Component: TitleComponent,
  defaultProps: titleDefaultConfig,
};
