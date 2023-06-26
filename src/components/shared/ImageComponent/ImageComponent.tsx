import Image, { StaticImageData } from 'next/image';

type Props = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
};

const ImageComponent = ({ src, alt, className }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`${
        className ? className : ''
      } block h-full w-full object-contain object-center`}
      fill={true}
    />
  );
};

export default ImageComponent;
