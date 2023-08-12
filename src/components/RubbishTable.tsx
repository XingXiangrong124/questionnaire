import { FC, useState } from 'react';
import { Table, Tag, Space, Button, Modal, message, Spin } from 'antd';
import Column from 'antd/es/table/Column';
import useQuestionList from '../hooks/useQuestionList';
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
const RubbishTable: FC = () => {
  const { list, loading } = useQuestionList({ isDeleted: true });
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deletedLoading, setdeletedLoading] = useState(false);
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
    setdeletedLoading(true);
    setTimeout(() => {
      setDeleteOpen(false);
      setdeletedLoading(false);
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
      {loading && (
        <div style={{ display: 'flex', alignSelf: 'flex-end', justifyContent: 'center' }}>
          <Spin size="large" />
        </div>
      )}
      {!loading && (
        <Table
          dataSource={list}
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
      )}
      <Modal
        title={
          <Space>
            <ExclamationCircleTwoTone twoToneColor="#FFD700" style={{ fontSize: '20px' }} />
            <span>确定要彻底删除此问卷吗？</span>
          </Space>
        }
        open={deleteOpen}
        onOk={handleOk}
        confirmLoading={deletedLoading}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};
export default RubbishTable;
