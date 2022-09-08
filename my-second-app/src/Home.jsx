import AnimesList from "./AnimesList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: animes,
    pending,
    error,
  } = useFetch("https://api.jikan.moe/v4/anime");
  return (
    <div>
      <h1>display all anims</h1>
      {pending && (
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {animes && (
        <h1>
          <AnimesList animes={animes} />
        </h1>
      )}
    </div>
  );
};

export default Home;
