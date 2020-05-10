import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song name</label>
      <input type="text" value={title} required onChange={handleChange} />
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongForm;
