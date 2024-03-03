export type OptionType = {
  text: string;
  checked: boolean;
};
export type CheckPropsConfig = {
  title?: string;
  vertical?: boolean;
  list?: OptionType[];

  onChange?: (newProp: CheckPropsConfig) => void;
  // 用于锁定
  locked?: boolean;
};
export const checkDefaultConfig: CheckPropsConfig = {
  title: '我是多选框',
  vertical: false,
  list: [
    { text: 'item 1', checked: false },
    { text: 'item 2', checked: false },
    { text: 'item 3', checked: false },
  ],
};
