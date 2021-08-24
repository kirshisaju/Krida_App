import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function loginUser(token: string) {
  return apiClient.post(ApiConfig.LOGIN, { token });
}