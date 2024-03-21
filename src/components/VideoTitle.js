const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-60 px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-4 w-1/4 text-lg">{overview}</p>
      <div>
        <button className="p-4 px-12 rounded-lg bg-white text-xl text-black hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-3 p-4 px-10 rounded-lg bg-gray-500 bg-opacity-40 text-white text-xl">
          🛈 More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
