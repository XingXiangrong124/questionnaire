import { useEffect, useState } from 'react';
function useMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mouseListen = (event: MouseEvent) => {
    setX(event.clientX);
    setY(event.clientY);
  };
  useEffect(() => {
    window.addEventListener('mousemove', mouseListen);
    // 自己创建的一定要自己销毁，不然会导致内存泄露
    return () => {
      window.removeEventListener('mousemove', mouseListen);
    };
  }, []);
  return { x, y };
}
export default useMouse;
