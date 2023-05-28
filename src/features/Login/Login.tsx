import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Common/Input/Input';
import { loginWithEmailAndPassword } from '../../app/Services/AuthService';

const Login = () => {
  const [selectTab, setSelectTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    const res = loginWithEmailAndPassword(email, password);
    if (res) {
      navigate('wellcome-page');
    }
  };
  return (
    <div id="login-form" className="z-10 h-[580px] w-[400px] p-8">
      {selectTab === 'login' && (
        <>
          <div className="h-fit w-full text-center text-3xl font-bold text-white">Login with us</div>
          <div className="mt-1 h-fit w-full text-center text-[10px] text-white">
            Have a good time with new friends
          </div>
          <div className="my-16 grid h-fit w-full gap-y-4">
            <Input
              type="text"
              className="input z-10 h-10 w-full rounded-sm px-2 text-sm"
              placeholder="Username..."
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              className="input z-10 h-10 w-full rounded-sm px-2 text-sm"
              placeholder="Password..."
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <div
              className="mt-4 h-10 w-full  rounded-md bg-gradient-to-r from-[#AC9DC5]  to-pink-900 text-center font-semibold leading-9 text-white hover:from-cyan-900 hover:to-[#AC9DC5] hover:text-gray-500"
              role="button"
              tabIndex={0}
              onClick={handleSubmit}
            >
              Login
            </div>
            <div className="mt-10 grid h-fit w-full grid-cols-2">
              <div className="cols-span-1 text-left text-xs text-white hover:text-gray-500">
                Forgot Password
              </div>
              <div
                onClick={() => setSelectTab('register')}
                role="button"
                tabIndex={0}
                className="cols-span-1 text-right text-xs text-white hover:text-gray-500"
              >
                Register
              </div>
            </div>
            <div className="flex h-5 w-full justify-between py-2">
              <div className="h-[1px] w-[calc(50%-40px)] bg-gray-100" />
              <div className="-mt-1.5 h-fit w-fit text-[10px] text-white">Or login with</div>
              <div className="h-[1px] w-[calc(50%-40px)] bg-gray-100" />
            </div>
            <div className="h-10 w-full rounded-md bg-[#EB4132] text-center  font-semibold leading-9 text-white hover:bg-[#c83224] hover:text-gray-500">
              Google
            </div>
            <div className="h-10 w-full rounded-md bg-blue-700  text-center  font-semibold leading-9 text-white hover:bg-blue-800 hover:text-gray-500">
              Facebook
            </div>
          </div>
        </>
      )}
      {selectTab === 'register' && (
        <>
          <div className="h-fit w-full text-center text-3xl font-bold text-white">Register account</div>
          <div className="mt-1 h-fit w-full text-center text-[10px] text-white">Wellcome to the same</div>
          <div className="my-14 grid h-fit w-full gap-y-4">
            <Input
              type="text"
              className="input z-10 h-10 w-full rounded-sm px-2 text-sm"
              placeholder="Full name"
            />
            <Input
              type="text"
              className="input z-10 h-10 w-full rounded-sm px-2 text-sm"
              placeholder="Email"
            />
            <Input
              type="text"
              className="input z-10 h-10 w-full rounded-sm px-2 text-sm"
              placeholder="Username..."
            />
            <Input
              type="text"
              className="input z-10 h-10 w-full rounded-sm px-2 text-sm"
              placeholder="Password..."
            />
            <Input
              type="text"
              className="input z-10 h-10 w-full rounded-sm px-2 text-sm"
              placeholder="Cornfirm password..."
            />
            <div className="mt-4 h-10 w-full  rounded-md bg-gradient-to-r from-[#AC9DC5]  to-pink-900 text-center font-semibold leading-9 text-white hover:from-cyan-900 hover:to-[#AC9DC5] hover:text-gray-500">
              Register
            </div>
            <div className="mt-10 grid h-fit w-full grid-cols-2">
              <div className="cols-span-1 text-left text-xs text-white hover:text-gray-500">
                Forgot Password
              </div>
              <div
                onClick={() => setSelectTab('login')}
                role="button"
                tabIndex={0}
                className="cols-span-1 text-right text-xs text-white hover:text-gray-500"
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
