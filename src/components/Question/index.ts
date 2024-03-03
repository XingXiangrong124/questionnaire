import { FC } from 'react';
import InputComponentConfig, { InputPropsConfig } from './Input';
import TitleComponentConfig, { TitlePropsConfig } from './title';
import TitleInfoComponentConfig, { TitleInfoPropsConfig } from './titleInfo';
import ParagraphComponentConfig, { ParagraphPropsConfig } from './paragraph';
import RadioComponentConfig, { RadioPropsConfig } from './radioSelect';
import CheckComponentConfig, { CheckPropsConfig } from './checkSelect';
// 各个组件的 prop type
export type ComponentPropsConfig =
  | InputPropsConfig
  | TitlePropsConfig
  | TitleInfoPropsConfig
  | ParagraphPropsConfig
  | RadioPropsConfig
  | CheckPropsConfig;

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
  TitleInfoComponentConfig,
  ParagraphComponentConfig,
  RadioComponentConfig,
  CheckComponentConfig,
];
// 用户分组
export const getComponentByGroup = [
  {
    groupName: '文本显示',
    componentGroup: [TitleInfoComponentConfig, TitleComponentConfig, ParagraphComponentConfig],
  },
  {
    groupName: '用户输入',
    componentGroup: [InputComponentConfig],
  },
  {
    groupName: '选项列表',
    componentGroup: [RadioComponentConfig, CheckComponentConfig],
  },
];
// 根据类型查找组件
export function getComponentByType(type: string) {
  return componentConfigList.find(c => c.type === type);
}
