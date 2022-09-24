import { endpoints } from 'api/endpoints';
import { AxiosError } from 'axios';
import { ErrorsCode } from 'constants/errors';
import { Contact } from 'interfaces/api/contacts.interface';
import {
  ApiEmptyResponse,
  ApiResponse,
  ApiResponseAll,
  IEmptyResponse,
  IResponse,
  ParamsFetchAll,
} from 'interfaces/api/response.interfaces';
import { UniqueId } from 'interfaces/common.interfaces';
import { axios } from 'utils/axios';

const getList = async (params: ParamsFetchAll): ApiResponseAll<Contact> => {
  try {
    const formParams = { ...params };
    const { pageSize = 8, sort, search } = params;

    if (!params.page || Number.isNaN(params.page)) formParams.page = 1;

    const res = await axios.get<Contact[]>(endpoints.contacts.list(), {
      params: { page: params.page, limit: pageSize, sort, search },
    });

    console.log(res);

    return { data: res.data };
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

// const create = async (data: ProductToServer): ApiEmptyResponse => {
//   try {
//     const res = await axios.put<IEmptyResponse>(endpoints.goods.create(), data);

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
  // create,
  // update,
  // remove,
};
