import { FC, useState, useEffect } from 'react';
import { Form, Input, Checkbox, Select } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { RadioPropsConfig } from './interface';
const ProperCom: FC<RadioPropsConfig> = props => {
  const { title, direction, options, locked, onChange, defaultValue } = props;
  const [form] = Form.useForm();
  const [checkbox, setCheckbox] = useState(false);
  const directionJudge = (val: boolean) => {
    if (val) return 'vertical';
    return 'horizontal';
  };
  useEffect(() => {
    form.setFieldsValue({ title, direction });
  }, [title, direction]);
  const handleCheckBox = (e: CheckboxChangeEvent) => {
    setCheckbox(e.target.checked);
  };
  return (
    <div>
      <Form initialValues={{ title, direction, options, defaultValue }} form={form} disabled={locked}>
        <Form.Item label="单选标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="单选项" name="options">
          <Input />
        </Form.Item>
        <Form.Item label="默认选中" name="defaultValue">
          <Select options={options?.map(({ value, text }) => ({ value, label: text }))} />
        </Form.Item>
        <Form.Item label="" name="direction" valuePropName={directionJudge(checkbox)}>
          <Checkbox onChange={handleCheckBox}>垂直布局</Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProperCom;
