import GenreCard from "../../components/GenreCard";
import NewSong from "../../components/NewSong/NewSong";

const genres = [
  "Pop",
  "Rock",
  "Lofi",
  "EDM",
  "Jazz",
  "Hip-Hop",
  "Ballad",
  "Indie",
];

const Home = () => {
  return (
    <div className="min-h-screen press_start text-text">
      <div className="p-10">
        <section className="text-center mb-10">
          <h2 className="text-4xl text-primary mb-4">
            🎧 Feel the Retro Beat 🎧
          </h2>
          <p className="text-lg text-muted">
            Play your favorite retro vibes now!
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl ml-2 text-primary mb-6 tracking-widest">
            NEW RELEASES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-background rounded-xl p-4 border border-warning shadow-lg hover:scale-105 transition-all"
              >
                <img
                  src={`https://placehold.co/300x300?text=Album+${id}`}
                  alt=""
                  className="rounded mb-4"
                />
                <h3 className="text-xl text-emphasis">Album Title {id}</h3>
                <p className="text-sm text-muted">Artist Name</p>
                <button className="mt-3 px-4 py-2 rounded bg-emphasis text-white hover:bg-accent">
                  Play
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl text-primary my-6 tracking-widest">
            EXPLORE GENRES
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {genres.map((genre) => (
              <GenreCard key={genre} name={genre} />
            ))}
          </div>
        </section>

        <NewSong />
      </div>
    </div>
  );
};

export default Home;
