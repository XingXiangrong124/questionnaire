/**
 * @description 问卷输入框
 */

import ParagraphComponent from './ParagraphComponent';
import { paragraphDefaultConfig } from './interface';
import ProperCom from './ProperCom';
export * from './interface';
// 组件的配置
export default {
  title: '段落框',
  type: 'paragraph',
  Component: ParagraphComponent,
  ProperCom,
  defaultProps: paragraphDefaultConfig,
};
