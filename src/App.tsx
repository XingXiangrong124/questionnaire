import { RouterProvider } from 'react-router-dom';
import routerConfig from './router';
function App() {
  // const { x, y } = useMouse();
  return (
    <>
      <RouterProvider router={routerConfig}></RouterProvider>
    </>
  );
}

export default App;
