import { twMerge } from "tailwind-merge";

interface InputProps {
    type: string;
    value?: any;
    placeholder?: string;
    className?: string;
    onChange?: () => void;
}

const Input = ({ type, value, placeholder, className, onChange }: InputProps) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={twMerge("w-full h-10 input px-2 text-sm rounded-sm z-10", className)}
        />
    );
};

export default Input;
