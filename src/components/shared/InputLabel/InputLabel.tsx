import { InputLabelProps } from './types';

const InputLabel: React.FC<InputLabelProps> = ({ id = '', label }) => {
  if (!id || !label) {
    return <></>;
  }
  return (
    <label
      className='text-primary-black/60 text-xs font-medium md:text-sm'
      htmlFor={id}
    >
      {label}
    </label>
  );
};

export default InputLabel;
