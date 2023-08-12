import { getQuestionList } from '../api/question';
import { useRequest } from 'ahooks';
import { useSearchParams } from 'react-router-dom';
import { LIST_SEARCH_PARAMETER_KEY } from '../utils/constant/index';
/**
 * @description 查询/搜索列表
 */
export type ListDetailType = {
  _id: string;
  name: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
};
type ListDataType = {
  list: ListDetailType[];
  total: number;
};
type OptionType = {
  isStar: boolean;
  isDeleted: boolean;
};
const useQuestionList = (option?: Partial<OptionType>) => {
  const { isStar, isDeleted } = option || {}; //当为undefied的时候不会被url拼接
  console.log(isStar);
  const [searchParams] = useSearchParams();
  const key = searchParams.get(LIST_SEARCH_PARAMETER_KEY) || '';
  const {
    loading,
    data = {},
    error,
  } = useRequest(() => getQuestionList({ key, isStar, isDeleted }), { refreshDeps: [searchParams] }); //刷新依赖项
  const { list = [], total = 0 } = data as ListDataType;
  return { loading, list, total, error };
};
export default useQuestionList;
