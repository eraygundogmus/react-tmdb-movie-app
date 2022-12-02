import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAccountDetails, getPopularMovies } from "services";
import { API_KEY } from "../constants";
import { setProfile } from "../features/account";

function Home() {
  const state = useSelector((state: any) => state);
  const [movies, setMovies] = useState([]);
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

      getPopularMovies({ apiKey: API_KEY, page: 1 }).then(async (res) => {
        const response = await res.json();
        setMovies(response.results);
      });

      // store' yazdır (persist olmamalı)
      // bir component ile list render yap
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

      <div>
        {movies.length > 0 &&
          movies.map((movie: any) => (
            <div key={movie.id}>
              <h1> {movie.title} </h1>
              <p>{movie.overview}</p>
              <span> {movie.vote_average} </span>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
