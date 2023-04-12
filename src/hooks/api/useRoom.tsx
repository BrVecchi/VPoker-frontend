import * as roomApi from "../../services/roomApi";
import useAsync from "../useAsync";

export default function useRooms(): RoomHookData {
  const {
    data: rooms,
    loading: roomsLoading,
    error: roomsError,
    act: getRoomsInfo,
  } = useAsync(roomApi.getRoomsInfo);

  return {
    rooms,
    roomsLoading,
    roomsError,
    getRoomsInfo,
  };
}

export interface RoomHookData {
  rooms: RoomInfo[] | null;
  roomsLoading: boolean;
  roomsError: Error | null;
  getRoomsInfo: () => Promise<RoomInfo[]>;
}

export interface RoomInfo {
  id: number;
  name: string;
  status: string;
  format_id: number;
  buyin: number;
  created_by: number;
  created_at: string;
  updated_at: string;
}

export interface RoomInfoToCreate {
  name: string;
  format_id: number;
  buyin: number;
}
