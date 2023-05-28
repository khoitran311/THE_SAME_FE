import { HeartFill } from 'styled-icons/bootstrap';
import FavoriteItem from '../Favorite/FavoriteItem';

const logo = '../../../logo.png';

const FavoriteList = [
  {
    uuid: 1,
    name: 'Favorites 1',
    icon: <HeartFill />,
  },
  {
    uuid: 1,
    name: 'Favorites 1',
    icon: <HeartFill />,
  },
  {
    uuid: 1,
    name: 'Favorites 1',
    icon: <HeartFill />,
  },
  {
    uuid: 1,
    name: 'Favorites 1',
    icon: <HeartFill />,
  },
  {
    uuid: 1,
    name: 'Favorites 1',
    icon: <HeartFill />,
  },
  {
    uuid: 1,
    name: 'Favorites 1',
    icon: <HeartFill />,
  },
  {
    uuid: 1,
    name: 'Favorites 1',
    icon: <HeartFill />,
  },
  {
    uuid: 1,
    name: 'Favorites 1',
    icon: <HeartFill />,
  },
];
const WellcomePage = () => {
  return (
    <div className="flex h-full w-full flex-shrink-0 items-center justify-center text-4xl">
      <div className="h-fit w-fit">
        <div className="flex h-fit  w-[800px] flex-shrink-0 items-center justify-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex h-fit w-[800px]">
          {FavoriteList.map((item) => (
            <FavoriteItem key={item.uuid} icon={item.icon} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default WellcomePage;
