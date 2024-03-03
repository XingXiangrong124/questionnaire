/**
 * @description 问卷多选框
 */

import CheckComponent from './CheckComponent';
import { checkDefaultConfig } from './interface';
import ProperCom from './ProperCom';
export * from './interface';
// 组件的配置
export default {
  title: '输入框',
  type: 'checkBox',
  Component: CheckComponent,
  ProperCom,
  defaultProps: checkDefaultConfig,
};
