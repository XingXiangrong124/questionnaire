/**
 * @description 问卷输入框
 */

import InputComponent from './InputComponent';
import { inputDefaultConfig } from './interface';
export * from './interface';
// 组件的配置
export default {
  title: '输入框',
  type: 'input',
  Component: InputComponent,
  defaultProps: inputDefaultConfig,
};
