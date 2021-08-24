import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function ClubUser(token: string) {
  return apiClient.post(ApiConfig.CLUB, { token });
}