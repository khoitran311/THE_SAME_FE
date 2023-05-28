import { HeartFill } from 'styled-icons/bootstrap';
import Login from '../Login/Login';

const HomePage = () => {
  return (
    <div className="relative flex h-full w-full flex-shrink-0 items-center justify-center bg-gradient-to-r from-cyan-900 to-pink-900">
      <Login />
      <div className="heart absolute left-[54%] top-[12%] h-fit w-fit rotate-45 text-cyan-900">
        <HeartFill size={220} />
      </div>
      <div className="heart absolute bottom-[12%] right-1/2 h-fit w-fit -rotate-45 text-pink-900">
        <HeartFill size={280} />
      </div>
    </div>
  );
};
export default HomePage;
