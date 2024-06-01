function AnimeCard({ Image, Title, Tag, IdCard }) {
  return (
    <div id={IdCard} className="text-left w-[210px] shadow-sm cursor-pointer">
      <img
        className="rounded-lg w-[200px] h-[300px] object-cover"
        src={Image}
        alt={Title}
      />
      <div className="p-[6px] flex justify-between items-center">
        <h1 className="font-semibold">{Title}</h1>
        <span className="bg-zinc-950 p-[3px] rounded-lg uppercase font-bold">
          {Tag}
        </span>
      </div>
    </div>
  );
}

export default AnimeCard;
