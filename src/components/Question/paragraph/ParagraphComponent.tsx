import { FC } from 'react';
import { Typography } from 'antd';
import { ParagraphPropsConfig, paragraphDefaultConfig } from './interface';

const { Paragraph } = Typography;
const ParagraphComponent: FC<ParagraphPropsConfig> = props => {
  const { text = '', textCenter } = { ...paragraphDefaultConfig, ...props };
  const textLine = text.split('\n');
  return (
    <div>
      <Paragraph style={{ textAlign: textCenter ? 'center' : 'start', marginBottom: 0 }}>
        {textLine.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Paragraph>
    </div>
  );
};
export default ParagraphComponent;
