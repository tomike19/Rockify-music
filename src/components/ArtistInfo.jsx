import React from "react";

const ArtistInfo = ({ artistInfo }) => {
  return (
    <div key={artistInfo.id}>
      {artistInfo.map((info) => (
        <h1>{info.artist_names}</h1>
      ))}
    </div>
  );
};

export default ArtistInfo;
