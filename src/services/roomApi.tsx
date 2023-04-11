import { RoomInfo } from '../hooks/api/useRoom';
import api from './api';

export async function getRoomsInfo(): Promise<RoomInfo[]> {
  const response = await api.get("/rooms");
  return response.data;
}

export async function createRoom(
  token: string,
  name: string,
  format_id: number,
  buyin: number
) {
  const response = await api.post(
    "/rooms",
    { name, format_id, buyin },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
