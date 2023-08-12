import request, { ResponseType } from '../utils/request/axios';
import { LIST_SEARCH_PARAMETER_KEY, PAGE_NUM, PAGE_SIZE } from '../utils/constant';

type ListInfo = {
  [LIST_SEARCH_PARAMETER_KEY]: string;
  isStar: boolean;
  isDeleted: boolean;
  pageSize: number;
  [PAGE_NUM]: number;
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
    params: {
      ...data,
      [PAGE_SIZE]: 10,
    },
    method: 'get',
  });
};

export const modifyQuestionList = (_id: string, data: { [key: string]: any }): Promise<ResponseType> => {
  return request({
    url: `/api/questionList/${_id}`,
    method: 'patch',
    data,
  });
};

export const duplicateQuestionList = (id: string): Promise<ResponseType> => {
  return request({
    url: `/api/questionList/duplicate/${id}`,
    method: 'post',
  });
};
