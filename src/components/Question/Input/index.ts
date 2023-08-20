/**
 * @description 问卷输入框
 */

import InputComponent from './InputComponent';
import { inputDefaultConfig } from './interface';
export * from './interface';

export default {
  title: '输入框',
  type: 'input',
  Component: InputComponent,
  defaultProps: inputDefaultConfig,
};
