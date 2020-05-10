import React, { useState, useEffect } from "react";
import NewSongForm from "./NewSongForm";
import { v1 as uuid } from "uuid";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "almost home" },
    { id: 2, title: "memory gospel" },
    { id: 3, title: "this wild darkness" },
  ]);
  const addSong = (title) => {
    setSongs([...songs, { id: uuid(), title }]);
  };
  const [age, setAge] = useState(20);
  useEffect(() => {
    console.log("Use Effect Rendered", songs);
  }, [setSongs]);

  const addAge = () => {
    setAge(age * 2);
    console.log({ age });
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      <button onClick={addAge}>Age: {age}</button>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Age2: {age}
      </button>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
