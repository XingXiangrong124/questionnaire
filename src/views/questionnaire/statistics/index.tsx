import { FC } from 'react';
import { useParams } from 'react-router-dom';
const Statistics: FC = () => {
  const { id = '' } = useParams();
  return <div>Statistics {id}</div>;
};
export default Statistics;
