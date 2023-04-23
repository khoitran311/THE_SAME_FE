import { useState } from "react";
import Input from "../Common/Input/Input";

const Login = () => {
    const [selectTab, setSelectTab] = useState("login");
    return (
        <div id="login-form" className="w-[400px] h-[580px] p-8 z-10">
            {selectTab === "login" && (
                <>
                    <div className="w-full h-fit text-white text-center text-3xl font-bold">Login with us</div>
                    <div className="w-full h-fit text-white text-center text-[10px] mt-1">
                        Have a good time with new friends
                    </div>
                    <div className="w-full h-fit my-16 grid gap-y-4">
                        <Input
                            type="text"
                            className="w-full h-10 input px-2 text-sm rounded-sm z-10"
                            placeholder="Username..."
                        />
                        <Input
                            type="text"
                            className="w-full h-10 input px-2 text-sm rounded-sm z-10"
                            placeholder="Password..."
                        />
                        <div className="w-full mt-4 hover:text-gray-500  h-10 leading-9 font-semibold  bg-gradient-to-r from-[#AC9DC5] to-pink-900 hover:from-cyan-900 hover:to-[#AC9DC5] rounded-md text-white text-center">
                            Login
                        </div>
                        <div className="w-full h-fit mt-10 grid grid-cols-2">
                            <div className="cols-span-1 text-left text-xs hover:text-gray-500 text-white">
                                Forgot Password
                            </div>
                            <div
                                onClick={() => setSelectTab("register")}
                                className="cols-span-1 text-right text-xs hover:text-gray-500 text-white"
                            >
                                Register
                            </div>
                        </div>
                        <div className="w-full h-5 flex justify-between py-2">
                            <div className="w-[calc(50%-40px)] h-[1px] bg-gray-100"></div>
                            <div className="w-fit h-fit text-[10px] -mt-1.5 text-white">Or login with</div>
                            <div className="w-[calc(50%-40px)] h-[1px] bg-gray-100"></div>
                        </div>
                        <div className="w-full h-10 leading-9 font-semibold hover:text-gray-500  bg-[#EB4132] hover:bg-[#c83224] rounded-md text-white text-center">
                            Google
                        </div>
                        <div className="w-full h-10 leading-9 font-semibold  hover:text-gray-500  bg-blue-700 hover:bg-blue-800 rounded-md text-white text-center">
                            Facebook
                        </div>
                    </div>
                </>
            )}
            {selectTab === "register" && (
                <>
                    <div className="w-full h-fit text-white text-center text-3xl font-bold">Register account</div>
                    <div className="w-full h-fit text-white text-center text-[10px] mt-1">Wellcome to the same</div>
                    <div className="w-full h-fit my-14 grid gap-y-4">
                        <Input
                            type="text"
                            className="w-full h-10 input px-2 text-sm rounded-sm z-10"
                            placeholder="Full name"
                        />
                        <Input
                            type="text"
                            className="w-full h-10 input px-2 text-sm rounded-sm z-10"
                            placeholder="Email"
                        />
                        <Input
                            type="text"
                            className="w-full h-10 input px-2 text-sm rounded-sm z-10"
                            placeholder="Username..."
                        />
                        <Input
                            type="text"
                            className="w-full h-10 input px-2 text-sm rounded-sm z-10"
                            placeholder="Password..."
                        />
                        <Input
                            type="text"
                            className="w-full h-10 input px-2 text-sm rounded-sm z-10"
                            placeholder="Cornfirm password..."
                        />
                        <div className="w-full mt-4 hover:text-gray-500  h-10 leading-9 font-semibold  bg-gradient-to-r from-[#AC9DC5] to-pink-900 hover:from-cyan-900 hover:to-[#AC9DC5] rounded-md text-white text-center">
                            Register
                        </div>
                        <div className="w-full h-fit mt-10 grid grid-cols-2">
                            <div className="cols-span-1 text-left text-xs hover:text-gray-500 text-white">
                                Forgot Password
                            </div>
                            <div
                                onClick={() => setSelectTab("login")}
                                className="cols-span-1 text-right text-xs hover:text-gray-500 text-white"
                            >
                                Login
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
export default Login;
