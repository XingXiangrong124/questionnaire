import TitleInfoComponent from './TitleInfoComponent';
import { titleInfoDefaultConfig } from './interface';
import ProperCom from './ProperCom';
export * from './interface';

export default {
  title: '段落信息描述',
  type: 'titleInfo',
  Component: TitleInfoComponent,
  ProperCom,
  defaultProps: titleInfoDefaultConfig,
};
