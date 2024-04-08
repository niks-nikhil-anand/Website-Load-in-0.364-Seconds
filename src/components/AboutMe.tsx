import React from 'react';

const AboutMe = () => {
  return (
    <div className='flex justify-center flex-col px-9 xs:px-8 sm:px-16 mt-9 items-center mb-10'>
      <div className='base-bold mb-5'>
        <h3 className='text-gradient underline'>About Me</h3>
      </div>
      <div>
        <h2 className='text-white heading3 mb-2'>
          <span className="text-white text-gradient">
            I&apos;m Nikhil Anand,
          </span>{' '}
          a dedicated full-time freelancer based in India. With years of experience, I&apos;ve assisted numerous{' '}
          <span className="text-white base-bold text-gradient leading-normal">
            startup business and entrepreneurs
          </span>{' '}
          in establishing a{' '}
          <span className='text-white base-bold text-gradient leading-normal'>
            strong online presence
          </span>{' '}
          through high-quality website development and effective online marketing strategies.{' '}
          My expertise lies in helping startups and entrepreneurs achieve their goals by{' '}
          <span className="text-white base-bold text-gradient">
            creating simple, clean, and impactful websites
          </span>{' '}
          without the high fees charged by larger web design firms.
        </h2>
      </div>
    </div>
  );
};

export default AboutMe;
