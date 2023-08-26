import { useEffect, FC } from 'react';
import { Form, Input, Select, Checkbox } from 'antd';
import { TitlePropsConfig } from './interface';
const ProperCom: FC<TitlePropsConfig> = props => {
  const { text, level, textCenter, onChange } = props;
  const [form] = Form.useForm();
  const handleChangeSelect = (value: string) => {
    console.log(`selected ${value}`);
  };
  useEffect(() => {
    form.setFieldsValue({ text, level, textCenter });
  }, [text, level, textCenter]);

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
        initialValues={{ text, level, textCenter }}
        form={form}
      >
        <Form.Item label="标题内容" name="text" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="字体大小" name="level">
          <Select
            style={{ width: 120 }}
            onChange={handleChangeSelect}
            options={[
              { value: '1', label: '一级标题' },
              { value: '2', label: '二级标题' },
              { value: '3', label: '三级标题' },
              { value: '4', label: '四级标题' },
              { value: '5', label: '五级标题' },
            ]}
          />
        </Form.Item>
        <Form.Item label="" name="textCenter" valuePropName="checked">
          <Checkbox>标题居中</Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ProperCom;
