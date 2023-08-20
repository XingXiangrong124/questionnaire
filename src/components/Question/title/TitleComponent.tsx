import { FC } from 'react';
import { Typography } from 'antd';
import { TitleContentConfig, titleDefaultConfig } from './interface';

const { Title } = Typography;
const TitleComponent: FC<TitleContentConfig> = props => {
  const { text, level, textCenter } = { ...titleDefaultConfig, ...props };
  let newLevel = (level <= 1 ? 1 : level >= 5 ? 5 : level) as 1 | 2 | 3 | 4 | 5 | undefined;
  return (
    <div>
      <Title level={newLevel} style={{ textAlign: textCenter ? 'center' : 'start' }}>
        {text}
      </Title>
    </div>
  );
};
export default TitleComponent;
