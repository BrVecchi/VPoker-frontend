import api from "./api";

export async function signUp(
  name: string,
  email: string,
  password: string
): Promise<any> {
  const response = await api.post("/users", { name, email, password });
  return response.data;
}
