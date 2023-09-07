import { useEffect, FC } from 'react';
import { Form, Input, Checkbox } from 'antd';
import { ParagraphPropsConfig } from './interface';
const ProperCom: FC<ParagraphPropsConfig> = props => {
  const { text, textCenter, onChange, locked } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ text, textCenter });
  }, [text, textCenter]);

  const FormChangeHandle = () => {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  };

  return (
    <div>
      <Form
        layout="vertical"
        onValuesChange={FormChangeHandle}
        initialValues={{ text, textCenter }}
        form={form}
        disabled={locked}
      >
        <Form.Item label="段落内容" name="text" rules={[{ required: true, message: '请输入内容' }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="" name="textCenter" valuePropName="checked">
          <Checkbox>段落居中</Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ProperCom;
