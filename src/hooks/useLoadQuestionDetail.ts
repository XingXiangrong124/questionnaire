import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRequest } from 'ahooks';
import { getQuestionDetail } from '../api/question';
import { resetComponents } from './../store/questionReducer/componentReducer';

export function useLoadQuestionDeatil() {
  const { id = '' } = useParams();
  const dispatch = useDispatch();
  // 数据加载
  const { loading, data, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error('没有问卷 id');
      const data = await getQuestionDetail(id);
      return data;
    },
    {
      manual: true,
    },
  );
  useEffect(() => {
    if (!data) return;
    const { title = '', componentList = [] } = data as any;
    dispatch(resetComponents({ componentList }));
  }, [data]);

  // 判断id变化，执行ajax加载问卷数据
  useEffect(() => {
    run(id);
  }, [id]);
  return { loading, error };
}
