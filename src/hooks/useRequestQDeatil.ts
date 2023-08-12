import { useParams } from 'react-router-dom';
import { getQuestionDetail } from '../api/question';

import { useRequest } from 'ahooks';
export function useRequestQDeatil() {
  //   const [loading, setLoading] = useState(true);
  //   const [questionDetail, setQuestionDetail] = useState({});
  const { id = '' } = useParams();
  //   useEffect(() => {
  //     getQuestionDetail(id).then((res: ResponseDataType) => {
  //       const data = res;
  //       setQuestionDetail(data);
  //       console.log('data', res);
  //       setLoading(false);
  //     });
  //   }, []);
  //   return { loading, questionDetail };
  const { loading, data, error } = useRequest(() => getQuestionDetail(id));
  return { loading, data, error };
}
