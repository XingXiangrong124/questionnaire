import { useEffect, FC } from 'react';
import { TitleInfoPropsConfig } from './interface';
import { Form, Input, Checkbox } from 'antd';
const { TextArea } = Input;
const ProperCom: FC<TitleInfoPropsConfig> = props => {
  const { text, desc, textCenter, onChange, locked } = props;

  useEffect(() => {
    form.setFieldsValue({ text, desc, textCenter });
  }, [text, desc]);
  const [form] = Form.useForm();
  const FormChangeHandle = () => {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  };
  return (
    <Form
      layout="vertical"
      onValuesChange={FormChangeHandle}
      initialValues={{ text, desc }}
      form={form}
      disabled={locked}
    >
      <Form.Item label="标题" name="text" rules={[{ required: true, message: '请输入标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="描述" name="desc">
        <TextArea />
      </Form.Item>
      <Form.Item label="" name="textCenter" valuePropName="checked">
        <Checkbox>居中</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default ProperCom;
