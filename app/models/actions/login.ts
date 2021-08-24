export interface ILoginRequestState {
  type: String;
  username: string;
  password: string;
  token: string
}

interface IResponse {
  id: number;
}

export interface ILoginResponseState {
  type: String;
  response: IResponse;
}
