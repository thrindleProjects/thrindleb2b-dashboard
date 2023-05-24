import { InputLabelProps } from './types';

const InputLabel: React.FC<InputLabelProps> = ({ id = '', label }) => {
  if (!id || !label) {
    return <></>;
  }
  return (
    <label
      className='text-xs  font-normal text-[#767778] md:text-sm'
      htmlFor={id}
    >
      {label}
    </label>
  );
};

export default InputLabel;
