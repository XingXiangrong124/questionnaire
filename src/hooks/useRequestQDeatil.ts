import { useParams } from 'react-router-dom';
import { getQuestionDetail } from '../api/question';

import { useRequest } from 'ahooks';
export function useRequestQDeatil() {
  const { id = '' } = useParams();
  const { loading, data, error } = useRequest(() => getQuestionDetail(id));
  return { loading, data, error };
}
