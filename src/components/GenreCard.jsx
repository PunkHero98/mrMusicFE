const GenreCard = ({ name }) => {
  return (
    <div className="border-2 bg-background border-primary px-4 py-3 rounded-md shadow-md hover:bg-accent transition-all text-center cursor-pointer text-sm tracking-widest text-primary hover:text-white">
      {name.toUpperCase()}
    </div>
  );
};

export default GenreCard;
