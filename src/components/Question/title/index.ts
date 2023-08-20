/**
 * @description 问卷标题
 */

import TitleComponent from './TitleComponent';
import { titleDefaultConfig } from './interface';
export * from './interface';

export default {
  title: '输入框',
  type: 'title',
  Component: TitleComponent,
  defaultProps: titleDefaultConfig,
};
