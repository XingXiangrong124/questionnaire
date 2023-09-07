/**
 * @description 问卷输入框
 */

import RadioComponent from './RadioComponent';
import { radioDefaultConfig } from './interface';
import ProperCom from './ProperCom';
export * from './interface';

// 组件的配置
export default {
  title: '选择框',
  type: 'radio',
  Component: RadioComponent,
  ProperCom,
  defaultProps: radioDefaultConfig,
};
