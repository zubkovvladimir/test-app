import { getPagesTotalCount } from 'utils/helpers';
import { endpoints } from 'api/endpoints';
import { AxiosError } from 'axios';
import { ErrorsCode } from 'constants/errors';
import { Contact, ContactsBase } from 'interfaces/api/contacts.interface';
import {
  ApiEmptyResponse,
  ApiResponse,
  ApiResponseWithMeta,
  IEmptyResponse,
  IResponse,
  ParamsFetchAll,
} from 'interfaces/api/response.interfaces';
import { UniqueId } from 'interfaces/common.interfaces';
import { axios } from 'utils/axios';

const getList = async (params: ParamsFetchAll): ApiResponseWithMeta<Contact> => {
  try {
    const { _limit = 8, _sort, q, _page = 1 } = params;

    // if (!params._page || Number.isNaN(_page)) params._page = 1;

    const { headers, data } = await axios.get<Contact[]>(endpoints.contacts.list(), {
      params: { _page, _limit, _sort, q },
    });

    return { data: { items: data, totalCount: Number(headers['x-total-count']) } };
  } catch (error) {
    const response = { errorMessage: 'Что-то пошло не так' };
    const { response: axiosResponse } = error as AxiosError;

    if (axiosResponse?.status) {
      response.errorMessage =
        ErrorsCode[axiosResponse?.status] ?? axiosResponse?.data?.message ?? axiosResponse?.data?.error;
    }

    return response;
  }
};

const create = async (data: ContactsBase): ApiEmptyResponse => {
  try {
    await axios.post<IEmptyResponse>(endpoints.contacts.create(), data);

    return { success: true };
  } catch (error) {
    const response = { errorMessage: 'Что-то пошло не так' };
    const { response: axiosResponse } = error as AxiosError;

    if (axiosResponse?.status) {
      response.errorMessage =
        ErrorsCode[axiosResponse?.status] ?? axiosResponse?.data?.message ?? axiosResponse?.data?.error;
    }

    return response;
  }
};

// const update = async (id: UniqueId, data: ProductToServer): ApiEmptyResponse => {
//   try {
//     const res = await axios.post<IEmptyResponse>(endpoints.goods.update(id), data);

//     return { success: res.data.success };
//   } catch (error) {
//     const errorAxios = error as AxiosError<any>;

//     if (errorAxios.response) {
//       if (errorAxios.response.status === 404) {
//         return { errorMessage: ApiErrors.NotFound };
//       }
//       if (errorAxios.response.status === 422) {
//         return { errorMessage: ApiErrors.UnexpectedEntity };
//       }
//     }

//     return { errorMessage: ApiErrors.SomethingGoesWrong };
//   }
// };

// const remove = async (id: UniqueId): ApiEmptyResponse => {
//   try {
//     const res = await axios.delete<IEmptyResponse>(endpoints.goods.delete(id));

//     return { success: res.data.success };
//   } catch (error) {
//     const errorAxios = error as AxiosError<any>;

//     if (errorAxios.response) {
//       if (errorAxios.response.status === 404) {
//         return { errorMessage: ApiErrors.NotFound };
//       }
//       if (errorAxios.response.status === 422) {
//         return { errorMessage: ApiErrors.UnexpectedEntity };
//       }
//     }

//     return { errorMessage: ApiErrors.SomethingGoesWrong };
//   }
// };

export const contactsApi = {
  getList,
  create,
  // update,
  // remove,
};
