export function requestToken({ apiKey }: { apiKey: string }) {
  return fetch(
    `${process.env.REACT_APP_API_URL}/authentication/token/new?api_key=${apiKey}`,
    {
      method: "GET",
    }
  );
}

export function createNewSession({
  apiKey,
  requestToken,
}: {
  apiKey: string;
  requestToken: string;
}) {
  return fetch(
    `${process.env.REACT_APP_API_URL}/authentication/session/new?api_key=${apiKey}`,
    {
      method: "POST",
      body: JSON.stringify({
        request_token: requestToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export function getAccountDetails({
  apiKey,
  sessionId,
}: {
  apiKey: string;
  sessionId: string;
}) {
  return fetch(
    `${process.env.REACT_APP_API_URL}/account?api_key=${apiKey}&session_id=${sessionId}`,
    {
      method: "GET",
    }
  );
}

export function getPopularMovies({
  apiKey,
  page = 1,
}: {
  apiKey: string;
  page: number;
}) {
  return fetch(
    `${process.env.REACT_APP_API_URL}/account?api_key=${apiKey}&language=en-US&page={page}`,
    {
      method: "GET",
    }
  );
}
