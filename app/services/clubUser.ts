import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function clubUser(token: string) {
  return apiClient.post(ApiConfig.CLUB, { token });
}