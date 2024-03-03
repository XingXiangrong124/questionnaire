import { FC } from 'react';
import { Typography, Radio, Space } from 'antd';
import { RadioPropsConfig, radioDefaultConfig, OptionType } from './interface';
const { Paragraph } = Typography;
const RadioComponent: FC<RadioPropsConfig> = props => {
  const { title, vertical = true, options = [], defaultValue } = { ...radioDefaultConfig, ...props };

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group value={defaultValue}>
        <Space direction={vertical ? 'vertical' : 'horizontal'} wrap={true}>
          {options?.map(item => RadioOption(item))}
        </Space>
      </Radio.Group>
    </div>
  );
};

const RadioOption: FC<OptionType> = props => {
  const { value } = props;
  return (
    <Radio value={value} key={value}>
      {value}
    </Radio>
  );
};

export default RadioComponent;
