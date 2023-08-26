import { FC } from 'react';
import { Typography } from 'antd';
import { TitlePropsConfig, titleDefaultConfig } from './interface';

const { Title } = Typography;
const TitleComponent: FC<TitlePropsConfig> = props => {
  const { text, level, textCenter } = { ...titleDefaultConfig, ...props };
  const changeFoontSize = (level: string | undefined) => {
    if (level === '1') {
      return '24px';
    } else if (level === '2') {
      return '22px';
    } else if (level === '3') {
      return '20px';
    } else if (level === '4') {
      return '18px';
    } else {
      return '16px';
    }
  };
  return (
    <div>
      <Title
        level={isNaN(parseInt(level)) ? undefined : (parseInt(level) as 5 | 4 | 3 | 2 | 1)}
        style={{ textAlign: textCenter ? 'center' : 'start', fontSize: changeFoontSize(level) }}
      >
        {text}
      </Title>
    </div>
  );
};
export default TitleComponent;
