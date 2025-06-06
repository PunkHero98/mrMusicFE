import React, { useEffect, useState } from "react";
import SongItem from "../SongItem";
import axios from "axios";

const NewSong = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get("http://localhost:8082/api/v1/songs");
        const data = res.data;
        if (res.status === 200) {
          setSongs(data.songs);
        }
      } catch (error) {
        console.error("Error fetching songs: ", error);
      }
    };
    fetchSongs();
  }, []);

  return (
    <div className="mt-14">
      <h2 className="text-2xl text-[#f97316] my-6 tracking-widest">
        NEW SONGS
      </h2>
      <div className="bg-background border-2 border-primary rounded-lg shadow-md">
        {songs.map((song, index) => (
          <SongItem
            key={index}
            index={index + 1}
            title={song.title}
            artist={song.artist}
          />
        ))}
      </div>
    </div>
  );
};

export default NewSong;
