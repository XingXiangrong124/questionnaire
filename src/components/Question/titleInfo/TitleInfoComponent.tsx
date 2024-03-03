import { FC } from 'react';
import { Typography } from 'antd';
import { TitleInfoPropsConfig, titleInfoDefaultConfig } from './interface';

const { Title, Paragraph } = Typography;
const TitleInfoComponent: FC<TitleInfoPropsConfig> = props => {
  const { text = '', desc = '', textCenter = false } = { ...titleInfoDefaultConfig, ...props };
  const descList = desc.split('\n'); // 段落换行
  return (
    <>
      <Title style={{ fontSize: '24px', textAlign: textCenter ? 'center' : 'start' }}>{text}</Title>
      <Paragraph style={{ textAlign: textCenter ? 'center' : 'start' }}>
        {descList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Paragraph>
    </>
  );
};

export default TitleInfoComponent;
