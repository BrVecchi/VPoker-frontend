//correct to tsx

import * as authApi from "../../services/authApi";
import useAsync from "../useAsync";

export default function useSignUp() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn,
  } = useAsync({ handler: authApi.signIn, immediate: false });

  return {
    signInLoading,
    signInError,
    signIn,
  };
}
