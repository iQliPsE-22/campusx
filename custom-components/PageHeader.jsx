'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PageHeader = ({
  imageSrc = '/default.jpg',
  title = 'IQlipse',
  titleAccent = 'I',
  subtitle = 'Your subtitle goes here.',
  primaryBtnText = 'Primary Action',
  primaryBtnLink = '#',
  secondaryBtnText = 'Secondary Action',
  secondaryBtnLink = '#',
}) => {
  return (
    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-blue-500">{titleAccent}</span>{title.replace(titleAccent, '')}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl text-gray-200">{subtitle}</p>
        <div className="mt-8 flex gap-4">
          {primaryBtnText && (
            <Link
              href={primaryBtnLink}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {primaryBtnText}
            </Link>
          )}
          {secondaryBtnText && (
            <Link
              href={secondaryBtnLink}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium transition-colors border border-white/20"
            >
              {secondaryBtnText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
