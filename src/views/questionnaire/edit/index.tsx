import { FC } from 'react';
import { useRequestQDeatil } from '../../../hooks/useRequestQDeatil';
const Edit: FC = () => {
  const { loading, data } = useRequestQDeatil();
  return (
    <>
      <div>Edit</div>
      {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
    </>
  );
};
export default Edit;
