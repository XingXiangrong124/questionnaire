export type InputPropsConfig = {
  text?: string;
  placeholder?: string;

  onChange?: (newProp: InputPropsConfig) => void;
  locked?: boolean;
};
export const inputDefaultConfig = {
  text: '输入框标题',
  placeholder: '请在这里输入',
};
