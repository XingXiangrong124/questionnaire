import { FC } from 'react';
import { Typography, Input } from 'antd';
import { InputPropsConfig, inputDefaultConfig } from './interface';

const { Text } = Typography;
const InputComponent: FC<InputPropsConfig> = props => {
  const { text, placeholder } = { ...inputDefaultConfig, ...props };
  return (
    <div>
      <Text strong>{text}</Text>
      <div style={{ marginTop: '5px' }}>
        <Input placeholder={placeholder}></Input>
      </div>
    </div>
  );
};
export default InputComponent;
