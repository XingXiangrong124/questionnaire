export type TitlePropsConfig = {
  text?: string;
  level?: string | undefined;
  textCenter?: boolean;

  onChange?: (newProp: TitlePropsConfig) => void;
};
export const titleDefaultConfig = {
  text: '我是标题',
  level: '1',
  textCenter: false,
};
