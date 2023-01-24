import Image from 'next/legacy/image';
import { FC } from 'react';
import { Button } from './Button';

export const Landing: FC = () => {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-center px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">By Intellect</span>
          <span className="block">Driven By Values</span>
        </h1>

        <div className="space-x-8">
          <Button title="Buy Now" />
          <a className="link">Learn More</a>
        </div>
      </div>

      <div className="relative hidden h-[450px] w-[450px] transition-all duration-200 md:inline lg:h-[650px] lg:w-[600px]">
        <Image
          src="https://raw.githubusercontent.com/lukef7fywmrp/apple-redesign-yt/main/public/iphone.png"
          alt="landing image"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};
