import { useEffect, FC } from 'react';
import { Form, Input } from 'antd';
import { InputPropsConfig } from './interface';
const ProperCom: FC<InputPropsConfig> = props => {
  const { text, placeholder, onChange } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ text, placeholder });
  }, [text, placeholder]);
  const FormChangeHandle = () => {
    if (onChange) onChange(form.getFieldsValue());
  };
  return (
    <div>
      <Form
        layout="vertical"
        onValuesChange={FormChangeHandle}
        initialValues={{ text, placeholder }}
        form={form}
      >
        <Form.Item label="标题" name="text" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="placeholder" name="placeholder">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};
export default ProperCom;
