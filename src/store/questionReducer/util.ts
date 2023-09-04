import { ComponentInfoType } from './componentReducer';
/**
 * 寻找删除之后的下一个selectedID
 * @param fe_id: 当前selectedID
 * @param componentList
 * @returns 新的selectedID
 */
export const findNewSelectedID = (fe_id: string, componentList: ComponentInfoType[]) => {
  const index = componentList.findIndex(item => item.fe_id === fe_id);
  if (index < 0 || componentList.length <= 1) return '';
  // 如果删除最末尾组件，则返回倒数第二个selectedID
  if (index + 1 === componentList.length) {
    return componentList[index - 1].fe_id;
  } else {
    // 否则返回下一个selectedID
    return componentList[index + 1].fe_id;
  }
};
