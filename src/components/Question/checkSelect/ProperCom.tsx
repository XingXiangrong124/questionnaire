import { FC, useEffect } from 'react';
import { Form, Input, Checkbox, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { CheckPropsConfig, OptionType, checkDefaultConfig } from './interface';
const ProperCom: FC<CheckPropsConfig> = prop => {
  const { vertical, title, list, locked, onChange } = { ...checkDefaultConfig, ...prop };
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ title, vertical });
  }, [title, vertical]);

  const checkChangeHandle = () => {
    if (onChange) {
      const newFormValue = form.getFieldsValue();
      console.log(newFormValue, 'newFormValue');
      // 让画布只显示一个空select
      const { list } = newFormValue;
      let nums = 0;
      newFormValue.list = list.filter((item: OptionType) => {
        if (item.text !== '') {
          return true;
        }

        if (item.text === '') {
          nums++;
        }
        return nums === 1;
      });
      onChange(newFormValue);
    }
  };

  const validateOptions = () => {
    // 手动触发验证
    form.validateFields(['list']);
  };

  return (
    <Form
      form={form}
      disabled={locked}
      initialValues={{ title, vertical, list }}
      onValuesChange={checkChangeHandle}
    >
      <Form.Item label="多选标题" name="title" rules={[{ required: true, message: '请输入多选标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="多选择项">
        <Form.List name="list">
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map(({ key, name }) => (
                  <Space key={key} align="baseline">
                    <Form.Item name={[name, 'checked']} valuePropName="checked">
                      <Checkbox></Checkbox>
                    </Form.Item>
                    <Form.Item
                      name={[name, 'text']}
                      rules={[
                        { required: true, message: '请输入选项文字' },
                        {
                          validator: (_, text) => {
                            const { list = [] } = form.getFieldsValue();
                            let num = 0;
                            list.map((opt: OptionType) => {
                              if (opt.text === text) num++;
                            });
                            if (num >= 2) return Promise.reject(new Error('输入了相同选项'));
                            return Promise.resolve();
                          },
                        },
                      ]}
                    >
                      <Input placeholder="请输入选项文字" />
                    </Form.Item>
                    {key > 0 && <MinusCircleOutlined onClick={() => remove(name)} />}
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="link"
                    onClick={() => {
                      add({ text: '', checked: false });
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
      <Form.Item label="" name="vertical" valuePropName="checked">
        <Checkbox>垂直布局</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default ProperCom;
