import request, { ResponseType } from '../utils/request/axios';
import { LIST_SEARCH_PARAMETER_KEY } from '../utils/constant';
type ListInfo = {
  [LIST_SEARCH_PARAMETER_KEY]: string;
  isStar: boolean;
  isDeleted: boolean;
};
export const getQuestionDetail = (id: string): Promise<ResponseType> => {
  return request({
    url: `/api/question/:${id}`,
    method: 'get',
  });
};

export const createQuestionItem = (): Promise<ResponseType> => {
  return request({
    url: '/api/question',
    method: 'post',
  });
};

export const getQuestionList = (data: Partial<ListInfo>): Promise<ResponseType> => {
  return request({
    url: '/api/questionList',
    params: data,
    method: 'get',
  });
};
