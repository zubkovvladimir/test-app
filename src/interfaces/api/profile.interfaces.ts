export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponseFromServer {
  access_token: string;
}

export interface LoginResponse {
  accessToken: string;
}
