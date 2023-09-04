import { FC } from 'react';
import { Space, Button, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { removeComponent } from '../../../store/questionReducer/componentReducer';
const EditToolBar: FC = () => {
  const dispatch = useDispatch();
  function deleteComponent() {
    dispatch(removeComponent());
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button icon={<DeleteOutlined />} shape="circle" onClick={deleteComponent}></Button>
      </Tooltip>
    </Space>
  );
};

export default EditToolBar;
