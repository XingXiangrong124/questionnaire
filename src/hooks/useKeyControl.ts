import { useKeyPress } from 'ahooks';
import { useDispatch } from 'react-redux';
import useGetComponents from './useGetComponents';
import {
  removeComponent,
  copiedComponentHandle,
  pastedComponentHandle,
} from '../store/questionReducer/componentReducer';

function isAreaActive() {
  // 当光标点击在哪里就返回哪里的element，当在右边栏设置组件时，activeElement返回input Element, 当鼠标在问卷画布上时，activeElement返回body
  const activeElem = document.activeElement;
  if (activeElem === document.body) return true;

  return false;
}
const useKeyControl = () => {
  const dispatch = useDispatch();
  const { selectedID } = useGetComponents();
  // 监听删除键
  useKeyPress(['delete', 'backspace'], () => {
    if (!isAreaActive()) return;
    dispatch(removeComponent());
  });

  // 监听复制键
  useKeyPress(['ctrl.c', 'meta.c'], () => {
    if (!isAreaActive()) return;
    dispatch(copiedComponentHandle({ fe_id: selectedID }));
  });

  // 监听粘贴键
  useKeyPress(['ctrl.v', 'meta.v'], () => {
    if (!isAreaActive()) return;
    dispatch(pastedComponentHandle());
  });
};
export default useKeyControl;
