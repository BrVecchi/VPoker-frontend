import * as roomApi from "../../services/roomApi";
import useAsync from "../useAsync";
import useToken from "../useToken";

export default function useCreateRoom() {
  const token = useToken();

  const {
    data: room,
    loading: roomLoading,
    error: roomError,
    act: createRoom,
  } = useAsync(
    (name, format_id, buyin) =>
      roomApi.createRoom(token, name, format_id, buyin),
    false
  );

  return {
    room,
    roomLoading,
    roomError,
    createRoom,
  };
}
