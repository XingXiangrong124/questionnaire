export type OptionType = {
  value?: string;
};
export type RadioPropsConfig = {
  title?: string;
  vertical?: boolean;
  options?: OptionType[];
  defaultValue?: string;

  onChange?: (newProp: RadioPropsConfig) => void;
  // 用于锁定
  locked?: boolean;
};
export const radioDefaultConfig: RadioPropsConfig = {
  title: '我是单选框',
  vertical: false,
  options: [{ value: 'a' }, { value: 'b' }, { value: 'c' }, { value: 'd' }],
  // 可以默认一个都不选中
  defaultValue: '',
};
