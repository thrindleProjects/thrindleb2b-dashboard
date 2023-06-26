const ModalHeader = ({
  title,
  text,
  className,
}: {
  title: string;
  text?: string;
  className?: string;
}) => {
  return (
    <div className={`w-full ${className}`}>
      <h6 className='text-primary-blue font-clash-grotesk text-xl font-semibold '>
        {title}
      </h6>
      {text && (
        <p className='font-clash-grotesk pt-1 text-sm text-gray-500'>{text}</p>
      )}
    </div>
  );
};

export default ModalHeader;
