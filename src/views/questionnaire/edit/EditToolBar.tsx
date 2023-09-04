import { FC } from 'react';
import { Space, Button, Tooltip } from 'antd';
import { DeleteOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { removeComponent, changeVisibleComponent } from '../../../store/questionReducer/componentReducer';
import useGetComponents from '../../../hooks/useGetComponents';
const EditToolBar: FC = () => {
  const dispatch = useDispatch();
  const { selectedID } = useGetComponents();
  function deleteHandle() {
    dispatch(removeComponent());
  }
  function invisibleHandle() {
    dispatch(changeVisibleComponent({ fe_id: selectedID, isHidden: true }));
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button icon={<DeleteOutlined />} shape="circle" onClick={deleteHandle}></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button icon={<EyeInvisibleOutlined />} shape="circle" onClick={invisibleHandle}></Button>
      </Tooltip>
    </Space>
  );
};

export default EditToolBar;
