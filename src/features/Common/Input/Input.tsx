import { twMerge } from 'tailwind-merge';

interface InputProps {
  type: string;
  value?: any;
  placeholder?: string;
  className?: string;
  onChange?: (e: any) => void;
}

const Input = ({ type, value, placeholder, className, onChange }: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={twMerge('input z-10 h-10 w-full rounded-sm px-2 text-sm', className)}
    />
  );
};

export default Input;
