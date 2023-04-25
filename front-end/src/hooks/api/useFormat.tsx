import * as formatApi from "../../services/formatApi";
import useAsync from "../useAsync";

export default function useFormats(): FormatHookData {
  const {
    data: formats,
    loading: formatsLoading,
    error: formatsError,
    act: getFormats,
  } = useAsync(formatApi.getFormats);

  return {
    formats,
    formatsLoading,
    formatsError,
    getFormats,
  };
}

export interface FormatHookData {
  formats: FormatInfo[] | null;
  formatsLoading: boolean;
  formatsError: Error | null;
  getFormats: () => Promise<FormatInfo[]>;
}

export interface FormatInfo {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}
