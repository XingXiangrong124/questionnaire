import { FC } from 'react';
import { Typography, Space, Checkbox } from 'antd';
import { CheckPropsConfig, checkDefaultConfig } from './interface';

const { Paragraph } = Typography;
const CheckComponent: FC<CheckPropsConfig> = props => {
  const { vertical, title, list = [] } = { ...checkDefaultConfig, ...props };
  return (
    <>
      <Paragraph strong>{title}</Paragraph>
      <Space direction={vertical ? 'vertical' : 'horizontal'} wrap={true}>
        {list.map(({ checked, text }) => {
          return (
            <Checkbox key={text} value={text} checked={checked}>
              {text}
            </Checkbox>
          );
        })}
      </Space>
    </>
  );
};

export default CheckComponent;
