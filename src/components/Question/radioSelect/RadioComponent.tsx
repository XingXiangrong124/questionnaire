import { FC, useState } from 'react';
import { Typography, Radio, Space, RadioChangeEvent } from 'antd';
import { RadioPropsConfig, radioDefaultConfig, OptionType } from './interface';
const { Paragraph } = Typography;
const RadioComponent: FC<RadioPropsConfig> = props => {
  const { title, direction = 'horizontal', options = [], defaultValue } = { ...radioDefaultConfig, ...props };
  const [value, setValue] = useState(defaultValue);
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction={direction} wrap={true}>
          {options?.map(item => RadioOption(item))}
        </Space>
      </Radio.Group>
    </div>
  );
};

const RadioOption: FC<OptionType> = props => {
  const { text, value } = props;
  return (
    <Radio value={value} key={value}>
      {text}
    </Radio>
  );
};

export default RadioComponent;
