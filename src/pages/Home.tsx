import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAccountDetails } from "services";
import { API_KEY } from "../constants";
import { setProfile } from "../features/account";

function Home() {
  const state = useSelector((state: any) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!state.auth.isLoggedIn) {
      navigate("/login");
      return;
    }

    try {
      getAccountDetails({
        apiKey: API_KEY,
        sessionId: state.auth.sessionId,
      }).then(async (res) => {
        const profile = await res.json();
        const { id, name, username, avatar } = profile;
        const typedProfile = {
          id,
          name,
          username,
          gravatarHash: avatar.gravatar.hash,
        };
        dispatch(setProfile(typedProfile));
      });
    } catch (error) {
      console.log(error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.auth.sessionId]);

  return (
    <div>
      <header className="flex justify-between items-center p-2 bg-gray-200">
        <span className="select-none text-lg font-black text-gray-900">
          TMDB Movie
        </span>
        {/* Profile Card */}
        <div className="flex select-none cursor-pointer max-w-max p-2 rounded-xl items-center gap-2 bg-white">
          <span className="text-lg font-bold">
            {state.account.profile.username}
          </span>
          <img
            className="w-10 h-10 rounded-full"
            alt="avatar"
            src={`https://www.gravatar.com/avatar/${state.account.profile.gravatarHash}`}
          />
        </div>
      </header>
    </div>
  );
}

export default Home;
