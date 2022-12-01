import { useEffect } from "react";
import { requestToken, createNewSession } from "../services";
import { useSelector, useDispatch } from "react-redux";
import { REDIRECT_URL, API_KEY } from "../constants";
import { setToken, login, setSessionId } from "../features/auth";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const athorizedRequestToken = params.get("request_token");

  useEffect(() => {
    if (!auth.token) {
      try {
        requestToken({ apiKey: API_KEY }).then(async (res) => {
          const tokenObj = await res.json();
          dispatch(setToken(tokenObj.request_token));
        });
      } catch (error) {
        console.log(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.token]);

  useEffect(() => {
    if (athorizedRequestToken) {
      console.log("athorizedRequestToken : _________", athorizedRequestToken);

      try {
        createNewSession({
          apiKey: API_KEY,
          requestToken: athorizedRequestToken,
        })
          .then(async (res) => {
            const sessionObj = await res.json();
            const sessionId = sessionObj.session_id;
            dispatch(setSessionId(sessionId));
          })
          .then(() => {
            dispatch(login());
            navigate("/");
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [athorizedRequestToken]);

  return (
    <div className="m-10 gap-4 flex flex-col items-center">
      <a
        href={REDIRECT_URL(auth.token)}
        className="font-bold text-sm p-4 border border-gray-800"
      >
        Login with TMDB
      </a>
    </div>
  );
}

export default Login;
