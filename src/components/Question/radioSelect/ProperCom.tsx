import { FC, useEffect } from 'react';
import { Form, Input, Checkbox, Select, Space, Button } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { RadioPropsConfig, OptionType } from './interface';
const ProperCom: FC<RadioPropsConfig> = props => {
  const { title, vertical, options, locked, onChange, defaultValue } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ title, vertical, defaultValue });
  }, [title, vertical, defaultValue]);
  const FormChangeHandle = () => {
    if (onChange) {
      const newFormValue = form.getFieldsValue();
      // 让画布只显示一个空的单选radio
      const { options } = newFormValue;
      let num = 0;
      newFormValue.options = options.filter((item: OptionType) => {
        if (item.value !== '') {
          return true;
        }
        if (item.value === '') {
          num++;
        }
        return num === 1;
      });
      onChange(newFormValue);
    }
  };
  const validateOptions = () => {
    // 手动触发验证
    form.validateFields(['options']);
  };
  return (
    <div>
      <Form
        initialValues={{ title, vertical, options, defaultValue }}
        form={form}
        disabled={locked}
        onValuesChange={FormChangeHandle}
      >
        <Form.Item label="单选标题" name="title" rules={[{ required: true, message: '请输入单选标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="单选择项">
          <Form.List name="options">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map(({ key, name }) => (
                    <Space key={key} align="baseline">
                      <Form.Item
                        name={[name, 'value']}
                        rules={[
                          { required: true, message: '请输入选项文字' },
                          {
                            validator: (_, value) => {
                              const { options = [] } = form.getFieldsValue();
                              let num = 0;
                              options.map((opt: OptionType) => {
                                if (opt.value === value) num++;
                              });
                              if (num >= 2) return Promise.reject(new Error('输入了相同选项'));
                              return Promise.resolve();
                            },
                          },
                        ]}
                      >
                        <Input placeholder="请输入选项文字" />
                      </Form.Item>
                      {key > 1 && <MinusCircleOutlined onClick={() => remove(name)} />}
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="link"
                      onClick={() => {
                        add({ value: '' });
                        validateOptions();
                      }}
                      icon={<PlusOutlined />}
                    >
                      添加选项
                    </Button>
                  </Form.Item>
                </>
              );
            }}
          </Form.List>
        </Form.Item>
        <Form.Item label="默认选中" name="defaultValue">
          <Select options={options?.map(({ value }) => ({ value, label: value }))} />
        </Form.Item>
        <Form.Item label="" name="vertical" valuePropName="checked">
          <Checkbox>垂直布局</Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProperCom;
