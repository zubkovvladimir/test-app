import { endpoints } from 'api/endpoints';
import { AxiosError } from 'axios';
import { ErrorsCode } from 'constants/errors';
import { LoginPayload, LoginResponse, LoginResponseFromServer } from 'interfaces/api/profile.interfaces';
import { ApiResponse } from 'interfaces/api/response.interfaces';
import { axios } from 'utils/axios';

const login = async (data: LoginPayload): ApiResponse<LoginResponse> => {
  try {
    const res = await axios.post<LoginResponseFromServer>(endpoints.auth.login(), data);

    return { data: { accessToken: res.data.access_token } };
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

export const authApi = {
  login,
};
