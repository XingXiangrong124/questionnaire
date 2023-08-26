import { FC } from 'react';
import { Typography } from 'antd';
import { TitlePropsConfig, titleDefaultConfig } from './interface';

const { Title } = Typography;
const TitleComponent: FC<TitlePropsConfig> = props => {
  const { text, level, textCenter } = { ...titleDefaultConfig, ...props };
  let newLevel = (level <= 1 ? 1 : level >= 5 ? 5 : level) as 1 | 2 | 3 | 4 | 5 | undefined;
  const changeFoontSize = (newLevel: 1 | 2 | 3 | 4 | 5 | undefined) => {
    if (newLevel === 1) {
      return '24px';
    } else if (newLevel === 2) {
      return '20px';
    } else if (newLevel === 3) {
      return '16px';
    } else if (newLevel === 4) {
      return '12px';
    } else {
      return '8px';
    }
  };
  return (
    <div>
      <Title
        level={newLevel}
        style={{ textAlign: textCenter ? 'center' : 'start', fontSize: changeFoontSize(newLevel) }}
      >
        {text}
      </Title>
    </div>
  );
};
export default TitleComponent;
