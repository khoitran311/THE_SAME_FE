import logo from "../../assets/images/logo_the_same.png";

const Header = () => {
    return (
        <div className="w-full h-20 bg-white shadow-xl z-50 fixed top-0 left-0 flex justify-start">
            <div className="w-40 h-full flex justify-center items-center flex-shrink-0">
                <img className="w-40 h-20 object-cover" src={logo} alt="" />
            </div>
        </div>
    );
};
export default Header;
