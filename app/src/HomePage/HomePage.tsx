import { HeartFill } from "styled-icons/bootstrap";
import Login from "../Login/Login";

const HomePage = () => {
    return (
        <div className="w-full h-full bg-gradient-to-r from-cyan-900 to-pink-900 relative flex flex-shrink-0 justify-center items-center">
            <Login />
            <div className="heart w-fit h-fit text-cyan-900 rotate-45 absolute top-[12%] left-[54%]">
                <HeartFill size={220} />
            </div>
            <div className="heart w-fit h-fit text-pink-900 -rotate-45 absolute bottom-[12%] right-1/2">
                <HeartFill size={280} />
            </div>
        </div>
    );
};
export default HomePage;
