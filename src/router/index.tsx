import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import NotFound from '../views/NotFound';
import List from '../views/mangement/List';
import Rubbish from '../views/mangement/Rubbish';
import Star from '../views/mangement/Star';
import Edit from '../views/questionnaire/edit';
import Statistics from '../views/questionnaire/statistics';
import MainLayout from '../layout/main/MainLayout';
import ManageLayout from '../layout/management/ManageLayout';
import QuestionLayout from '../layout/questionnaire/QuestionLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login', // 斜线可写可不写
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'management',
        element: <ManageLayout />,
        children: [
          {
            path: 'list', //也可以写成/list
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'rubbish',
            element: <Rubbish />,
          },
        ],
      },
      {
        path: '*', // 404配置 前面没有命中就显示它
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'questionnaire',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      },
      {
        path: 'statistics/:id',
        element: <Statistics />,
      },
    ],
  },
]);
export default router;
export const HOME_PATHNAME = '/';
export const LIST_PATHNAME = '/management/list';
export const STAR_PATHNAME = '/management/star';
export const RUBBISH_PATHNAME = '/management/rubbish';
export const REGISTER_PATHNAME = '/register';
export const LOGIN_PATHNAME = '/login';

export const NoNeedLoginIN = (pathname: string) => {
  return [HOME_PATHNAME, LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname);
};
