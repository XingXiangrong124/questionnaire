import { FC } from 'react';
import { useRequestQDeatil } from '../../../hooks/useRequestQDeatil';
const Statistics: FC = () => {
  const { loading, data } = useRequestQDeatil();

  return (
    <>
      <div>Statistics</div>
      {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
    </>
  );
};
export default Statistics;
