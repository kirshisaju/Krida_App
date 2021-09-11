import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function clubUser(club: object) {
  return apiClient.post(ApiConfig.CLUB, club);
}