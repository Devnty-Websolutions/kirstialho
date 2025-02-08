import React from "react";

const SpotifyPreview = ({ trackId }) => {
  if (!trackId) return <p>No track ID provided.</p>;

  return (
    <div className="w-full max-w-md mx-auto my-4">
      <iframe
        src={`https://open.spotify.com/embed/track/${trackId}`}
        width="100%"
        height="80"
        frameBorder="0"
        allow="encrypted-media"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default SpotifyPreview;