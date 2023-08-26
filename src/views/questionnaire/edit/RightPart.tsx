import { FC } from 'react';
import { Tabs } from 'antd';
import { HighlightTwoTone, SettingTwoTone } from '@ant-design/icons';
import PropertyCom from './PropertyCom';
const RightPart: FC = () => {
  const tabItems = [
    {
      key: 'prop',
      label: (
        <div>
          <span>
            <HighlightTwoTone twoToneColor="#6495ED" />
            属性
          </span>
        </div>
      ),
      children: <PropertyCom />,
    },
    {
      key: 'setting',
      label: (
        <div>
          <span>
            <SettingTwoTone twoToneColor="#6495ED" />
            设置
          </span>
        </div>
      ),
      children: <div>图层</div>,
    },
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="prop"
        items={tabItems.map(tab => {
          return tab;
        })}
      />
    </div>
  );
};
export default RightPart;
