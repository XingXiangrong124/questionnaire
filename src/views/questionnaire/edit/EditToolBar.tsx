import { FC } from 'react';
import { Space, Button, Tooltip } from 'antd';
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  UnlockOutlined,
  LockOutlined,
  CopyOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
  removeComponent,
  changeVisibleComponent,
  changeLockedComponent,
  copiedComponentHandle,
  pastedComponentHandle,
} from '../../../store/questionReducer/componentReducer';
import useGetComponents from '../../../hooks/useGetComponents';
const EditToolBar: FC = () => {
  const dispatch = useDispatch();
  const { selectedID, selectedComponent, copiedComponent } = useGetComponents();
  const isLocked = selectedComponent?.isLocked;
  function deleteHandle() {
    dispatch(removeComponent());
  }
  function invisibleHandle() {
    dispatch(changeVisibleComponent({ fe_id: selectedID, isHidden: true }));
  }
  function lockHandle() {
    dispatch(changeLockedComponent({ fe_id: selectedID }));
  }
  function copyHandle() {
    dispatch(copiedComponentHandle({ fe_id: selectedID }));
  }
  function pasteHandle() {
    if (copiedComponent) {
      dispatch(pastedComponentHandle());
    }
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button icon={<DeleteOutlined />} shape="circle" onClick={deleteHandle}></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button icon={<EyeInvisibleOutlined />} shape="circle" onClick={invisibleHandle}></Button>
      </Tooltip>
      <Tooltip title={isLocked ? '解锁' : '锁定'}>
        <Button
          icon={isLocked ? <UnlockOutlined /> : <LockOutlined />}
          shape="circle"
          type={isLocked ? 'primary' : 'default'}
          onClick={lockHandle}
        ></Button>
      </Tooltip>
      <Tooltip title="复制">
        <Button icon={<CopyOutlined />} shape="circle" onClick={copyHandle}></Button>
      </Tooltip>
      <Tooltip title="拷贝">
        <Button
          icon={<SnippetsOutlined />}
          shape="circle"
          onClick={pasteHandle}
          disabled={copiedComponent === null}
          style={{ backgroundColor: copiedComponent === null ? '#d3d3d3' : 'white' }}
        ></Button>
      </Tooltip>
    </Space>
  );
};

export default EditToolBar;
