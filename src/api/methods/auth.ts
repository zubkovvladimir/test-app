import { endpoints } from 'api/endpoints';
import { AxiosError } from 'axios';
import { ApiErrors } from 'constants/errors';
import { LoginPayload, LoginResponse, LoginResponseFromServer } from 'interfaces/api/profile.interfaces';
import { ApiResponse } from 'interfaces/api/response.interfaces';
import { axios } from 'utils/axios';

const login = async (data: LoginPayload): ApiResponse<LoginResponse> => {
  try {
    const res = await axios.post<LoginResponseFromServer>(endpoints.auth.login(), {
      ...data,
    });

    return { data: { accessToken: res.data.access_token } };
  } catch (error) {
    const errorAxios = error as AxiosError<any>;
    if (errorAxios.response) {
      if (errorAxios.response.status === 404) {
        return { errorMessage: ApiErrors.NotFound };
      }
      if (errorAxios.response.status === 422) {
        return { errorMessage: ApiErrors.UnexpectedEntity };
      }
    }
    return { errorMessage: ApiErrors.SomethingGoesWrong };
  }
};

export const authApi = {
  login,
};
