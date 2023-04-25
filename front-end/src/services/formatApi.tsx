import { FormatInfo } from "../hooks/api/useFormat";
import api from "./api";

export async function getFormats(): Promise<FormatInfo[]> {
  const response = await api.get("/formats");
  return response.data;
}
