import Image from 'next/image';

const ThrindleLogo: React.FC<{ variant: 'blue' | 'white' }> = ({ variant }) => {
  return (
    <figure className='relative aspect-[39/10] w-20 lg:w-24 xl:w-28'>
      <Image
        alt='Logo'
        src={`/assets/svg/Logo-${variant}.svg`}
        fill={true}
        priority={true}
      />
    </figure>
  );
};

export default ThrindleLogo;
