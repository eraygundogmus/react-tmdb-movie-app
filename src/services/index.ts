import { BASE_URL } from "constants/index";

export function requestToken({ apiKey }: { apiKey: string }) {
  return fetch(`${BASE_URL}/authentication/token/new?api_key=${apiKey}`, {
    method: "GET",
  });
}
