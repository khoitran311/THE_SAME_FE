interface FavoriteItemProps {
  icon: React.ReactNode;
  name: string;
}

const FavoriteItem = ({ icon, name }: FavoriteItemProps) => {
  return (
    <div className="h-40 w-40  rounded-lg border-gray-200">
      <div className="flex-center h-1/2 w-full">{icon}</div>
      <div className="h-1/2 w-full  text-center text-lg leading-[80px]">{name}</div>
    </div>
  );
};
export default FavoriteItem;
