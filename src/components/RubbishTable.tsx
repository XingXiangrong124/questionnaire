import { FC, useState } from 'react';
import { Table, Tag, Space, Button, Modal, message, Spin } from 'antd';
import { useRequest } from 'ahooks';
import { modifyQuestionList } from '../api/question';
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
type PropsType = {
  list: any;
  loading: boolean;
  refresh: any;
};
const RubbishTable: FC<PropsType> = props => {
  const { list, loading, refresh } = props;
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deletedLoading, setdeletedLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { loading: renewLoading, run: renewFun } = useRequest(
    async (id = '') => {
      let data;
      console.log(id);
      if (id) {
        data = await modifyQuestionList(id, { isDeleted: false });
      } else {
        for (let i = 0; i < selectedItems.length; i++) {
          data = await modifyQuestionList(selectedItems[i], { isDeleted: false });
        }
      }
      return data;
    },
    {
      manual: true,
      debounceWait: 500,
      onSuccess() {
        messageApi.open({
          type: 'success',
          content: '恢复成功',
        });
        refresh();
      },
    },
  );
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
          <Button type="primary" disabled={selectedItems.length === 0} onClick={() => renewFun()}>
            批量恢复
          </Button>
          <Button danger disabled={selectedItems.length === 0} onClick={showWarn}>
            批量删除
          </Button>
        </Space>
      </div>
      <Spin size="large" spinning={loading || renewLoading}>
        {
          <Table
            dataSource={list}
            rowKey={q => q._id}
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
            pagination={false}
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
              render={(_: any, record: any) => (
                <div style={{ marginLeft: '-45px' }}>
                  <Button type="link" style={{ fontSize: '14px' }} onClick={() => renewFun(record._id)}>
                    恢复
                  </Button>
                  <Button type="link" style={{ fontSize: '14px' }} onClick={showWarn}>
                    删除
                  </Button>
                </div>
              )}
            />
          </Table>
        }
      </Spin>
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
