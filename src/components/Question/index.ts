import { FC } from 'react';
import InputComponentConfig, { InputPropsConfig } from './Input';
import TitleComponentConfig, { TitlePropsConfig } from './title';
import ParagraphComponentConfig, { ParagraphPropsConfig } from './paragraph';
import RadioComponentConfig, { RadioPropsConfig } from './radioSelect';
// 各个组件的 prop type
export type ComponentPropsConfig =
  | InputPropsConfig
  | TitlePropsConfig
  | ParagraphPropsConfig
  | RadioPropsConfig;

// 统一组件的配置
export type ComponentConfigType = {
  title: string;
  type: string;
  Component: FC<ComponentPropsConfig>;
  ProperCom: FC<ComponentPropsConfig>;
  defaultProps: ComponentPropsConfig;
};

const componentConfigList: ComponentConfigType[] = [
  InputComponentConfig,
  TitleComponentConfig,
  ParagraphComponentConfig,
  RadioComponentConfig,
];
// 用户分组
export const getComponentByGroup = [
  {
    groupName: '文本显示',
    componentGroup: [TitleComponentConfig, ParagraphComponentConfig],
  },
  {
    groupName: '用户输入',
    componentGroup: [InputComponentConfig],
  },
  {
    groupName: '选项列表',
    componentGroup: [RadioComponentConfig],
  },
];
// 根据类型查找组件
export function getComponentByType(type: string) {
  return componentConfigList.find(c => c.type === type);
}
