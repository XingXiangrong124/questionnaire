export type TitleInfoPropsConfig = {
  text?: string;
  desc?: string;
  textCenter?: boolean;

  onChange?: (newProp: TitleInfoPropsConfig) => void;
  locked?: boolean;
};

export const titleInfoDefaultConfig = {
  text: '标题',
  desc: '介绍标题的详细信息',
  textCenter: false,
};
