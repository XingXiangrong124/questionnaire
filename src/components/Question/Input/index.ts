/**
 * @description 问卷输入框
 */

import InputComponent from './InputComponent';
import { inputDefaultConfig } from './interface';
import ProperCom from './ProperCom';
export * from './interface';
// 组件的配置
export default {
  title: '输入框',
  type: 'input',
  Component: InputComponent,
  ProperCom,
  defaultProps: inputDefaultConfig,
};
