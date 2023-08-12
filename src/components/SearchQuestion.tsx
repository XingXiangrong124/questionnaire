import { FC, useState, ChangeEvent, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Input, Space } from 'antd';
import { LIST_PATHNAME } from '../router';
import { LIST_SEARCH_PARAMETER_KEY } from '../utils/constant/index';
const { Search } = Input;
const SearchQuestion: FC = () => {
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const [keyValue, setKeyValue] = useState('');
  // 获取url参数，和分页搜索框联动
  useEffect(() => {
    const curValue = searchParams.get(LIST_SEARCH_PARAMETER_KEY) || '';
    setKeyValue(curValue);
  }, [searchParams]);
  const onSearch = (value: string) => {
    nav({
      pathname: LIST_PATHNAME,
      search: `${LIST_SEARCH_PARAMETER_KEY}=${value}`,
    });
  };
  const SearchHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyValue(event.target.value);
  };
  return (
    <>
      <Space>
        <Search
          size="large"
          placeholder="搜索页面"
          value={keyValue}
          onSearch={onSearch}
          onChange={SearchHandle}
          allowClear
          style={{ width: 200 }}
        />
      </Space>
    </>
  );
};
export default SearchQuestion;
