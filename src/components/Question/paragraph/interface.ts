export type ParagraphPropsConfig = {
  text?: string;
  textCenter?: boolean;

  onChange?: (newProp: ParagraphPropsConfig) => void;
  // 用于锁定
  locked?: boolean;
};
export const paragraphDefaultConfig = {
  text: '我是段落',
  textCenter: false,
};
