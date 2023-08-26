import { FC } from 'react';
import { Tabs } from 'antd';
import { RocketTwoTone, ToolTwoTone } from '@ant-design/icons';
import ComponentLib from './ComponentLib';
const LeftPart: FC = () => {
  const tabItems = [
    {
      key: 'componentLib',
      label: (
        <div>
          <span>
            <RocketTwoTone twoToneColor="#6495ED" />
            组件库
          </span>
        </div>
      ),
      children: <ComponentLib />,
    },
    {
      key: 'layer',
      label: (
        <div>
          <span>
            <ToolTwoTone twoToneColor="#6495ED" />
            图层
          </span>
        </div>
      ),
      children: <div>图层</div>,
    },
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="componentLib"
        items={tabItems.map(tab => {
          return tab;
        })}
      />
    </div>
  );
};

export default LeftPart;
