import { useEffect, useState } from 'react';
function getInfo(): Promise<string> {
  return new Promise(res => {
    setTimeout(() => {
      res(Date.now().toString());
    }, 1500);
  });
}
const useGetInfo = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState('');
  useEffect(() => {
    getInfo().then(temp => {
      setLoading(false);
      setInfo(temp.toString());
    });
  }, []);
  return { loading, info };
};

export default useGetInfo;
