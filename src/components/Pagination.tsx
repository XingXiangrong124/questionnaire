import { FC, useEffect, useState } from 'react';
import { Pagination, ConfigProvider, PaginationProps } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { PAGE_NUM } from '../utils/constant';
type PageInfo = {
  [PAGE_NUM]?: number;
  total: number;
};
const PaginationComponent: FC<PageInfo> = props => {
  const [pageNum, setPageNum] = useState(1);
  const nav = useNavigate();
  const currentPath = useLocation();
  const { total } = props;
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setPageNum(Number(searchParams.get(PAGE_NUM)) || 1);
  }, [searchParams]);

  const onChange: PaginationProps['onChange'] = pageNumber => {
    searchParams.set(PAGE_NUM, pageNumber.toString());
    nav({
      pathname: currentPath.pathname,
      search: searchParams.toString(),
    });
    console.log('Page: ', pageNumber);
  };
  return (
    <ConfigProvider locale={zh_CN}>
      <Pagination
        current={pageNum}
        total={total}
        showSizeChanger={false}
        showQuickJumper
        showTotal={total => (
          <div>
            共有 <span style={{ color: '#005aff', fontWeight: 'bold' }}>{total} </span>份问卷
          </div>
        )}
        onChange={onChange}
      />
    </ConfigProvider>
  );
};

export default PaginationComponent;
