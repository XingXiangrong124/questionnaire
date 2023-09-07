export type OptionType = {
  text?: string;
  value?: string;
};
export type RadioPropsConfig = {
  title?: string;
  direction?: 'vertical' | 'horizontal' | undefined;
  options?: OptionType[];
  defaultValue?: string;

  onChange?: (newProp: RadioPropsConfig) => void;
  // 用于锁定
  locked?: boolean;
};
export const radioDefaultConfig: RadioPropsConfig = {
  title: '我是单选框',
  direction: 'horizontal',
  options: [
    { text: 'A', value: 'a' },
    { text: 'B', value: 'b' },
    { text: 'C', value: 'c' },
    { text: 'D', value: 'd' },
  ],
  // 可以默认一个都不选中
  defaultValue: '',
};
