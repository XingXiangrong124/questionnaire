import { FC, useState } from 'react';
import { Table, Tag, Space, Button, Modal, message } from 'antd';
import Column from 'antd/es/table/Column';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
const columnsTable = [
  {
    title: '问卷名称',
    dataIndex: 'name',
  },
  {
    title: '是否发布',
    dataIndex: 'isPublished',
    render: (isPublished: boolean) => {
      return isPublished ? <Tag color="success">已发布</Tag> : <Tag color="processing">未发布</Tag>;
    },
  },
  {
    title: '答卷数量',
    dataIndex: 'answerCount',
  },
  {
    title: '创建时间',
    dataIndex: 'createAt',
  },
];
const data = [
  {
    _id: 'q1',
    name: '问卷test1',
    isPublished: true,
    answerCount: 11,
    createAt: '8月1日 20:30',
  },
  {
    _id: 'q2',
    name: '问卷test2',
    isPublished: false,
    answerCount: 110,
    createAt: '8月12日 20:30',
  },
  {
    _id: 'q3',
    name: '问卷test3',
    isPublished: true,
    answerCount: 54,
    createAt: '8月21日 20:30',
  },
];
const RubbishTable: FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedItems(selectedRowKeys as string[]);
    },
  };
  const showWarn = () => {
    setDeleteOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setDeleteOpen(false);
      setLoading(false);
      messageApi.open({
        type: 'success',
        content: '彻底删除成功',
      });
    }, 1000);
  };
  const handleCancel = () => {
    setDeleteOpen(false);
  };
  return (
    <>
      {contextHolder}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <Space>
          <Button type="primary" disabled={selectedItems.length === 0}>
            批量恢复
          </Button>
          <Button danger disabled={selectedItems.length === 0} onClick={showWarn}>
            批量删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={data}
        rowKey={q => q._id}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
      >
        {columnsTable.map(item => {
          const { title, dataIndex, render } = item;
          return (
            <Column
              title={title}
              dataIndex={dataIndex}
              render={value => (render ? render(value) : value)}
              key={dataIndex}
            ></Column>
          );
        })}
        <Column
          title="操作"
          key="action"
          render={(_: any, record) => (
            <div style={{ marginLeft: '-45px' }}>
              <Button type="link" style={{ fontSize: '14px' }}>
                恢复
              </Button>
              <Button type="link" style={{ fontSize: '14px' }} onClick={showWarn}>
                删除
              </Button>
            </div>
          )}
        />
      </Table>
      <Modal
        title={
          <Space>
            <ExclamationCircleTwoTone twoToneColor="#FFD700" style={{ fontSize: '20px' }} />
            <span>确定要彻底删除此问卷吗？</span>
          </Space>
        }
        open={deleteOpen}
        onOk={handleOk}
        confirmLoading={loading}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};
export default RubbishTable;
