import { getQuestionList } from '../api/question';
import { useRequest } from 'ahooks';
import { useSearchParams } from 'react-router-dom';
import { LIST_SEARCH_PARAMETER_KEY, PAGE_NUM } from '../utils/constant/index';
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
type SearchOptionType = {
  isStar: boolean;
  isDeleted: boolean;
};
const useQuestionList = (option?: Partial<SearchOptionType>) => {
  const { isStar, isDeleted } = option || {}; //当为undefied的时候不会被url拼接
  const [searchParams] = useSearchParams();
  const key = searchParams.get(LIST_SEARCH_PARAMETER_KEY) || '';
  const pageNum = Number(searchParams.get(PAGE_NUM)) || 1;
  const {
    loading,
    data = {},
    error,
    refresh,
  } = useRequest(() => getQuestionList({ key, isStar, isDeleted, pageNum }), { refreshDeps: [searchParams] }); //刷新依赖项
  const { list = [], total = 0 } = data as ListDataType;
  return { loading, list, total, error, refresh };
};
export default useQuestionList;
