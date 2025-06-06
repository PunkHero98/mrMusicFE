const SongItem = ({ index, title, artist }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-accent hover:bg-orange-200 transition-all">
      <div className="flex items-center gap-4">
        <span className="text-primary text-sm w-6">{index}.</span>
        <div>
          <p className="text-sm text-text">{title}</p>
          <p className="text-xs text-muted">{artist}</p>
        </div>
      </div>
      <button className="text-primary text-xl hover:scale-120 transition-transform">
        🎵
      </button>
    </div>
  );
};
export default SongItem;
