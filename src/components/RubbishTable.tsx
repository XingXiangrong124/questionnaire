import { FC } from 'react';
import { Table, Tag, Space } from 'antd';
import Column from 'antd/es/table/Column';
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
    key: '1',
    name: '问卷test1',
    isPublished: true,
    answerCount: 11,
    createAt: '8月1日 20:30',
  },
  {
    key: '2',
    name: '问卷test2',
    isPublished: false,
    answerCount: 110,
    createAt: '8月12日 20:30',
  },
  {
    key: '3',
    name: '问卷test3',
    isPublished: true,
    answerCount: 54,
    createAt: '8月21日 20:30',
  },
];
const RubbishTable: FC = () => {
  return (
    <Table dataSource={data}>
      {columnsTable.map(item => {
        const { title, dataIndex, render } = item;
        return (
          <Column
            title={title}
            dataIndex={dataIndex}
            render={value => (render ? render(value) : value)}
          ></Column>
        );
      })}
      <Column
        title="操作"
        key="action"
        render={(_: any, record) => (
          <Space size="middle">
            <a style={{ fontSize: '13px' }}>恢复</a>
            <a style={{ fontSize: '13px' }}>删除</a>
          </Space>
        )}
      />
    </Table>
  );
};
export default RubbishTable;
