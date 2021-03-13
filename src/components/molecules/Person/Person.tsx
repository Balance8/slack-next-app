import React, { FC } from 'react';
import { Card } from 'src/components/atoms/Card';
import { Pill } from 'src/components/atoms/Pill';

export interface PersonProps {
  person: {
    id: number;
    imgUrl: string;
    fullName: string;
    occupation: string;
  };
}

export const Person: FC<PersonProps> = ({ person }) => {
  return (
    <div className='flex flex-col'>
      <Card
        variant='elevation'
        classes='w-64 h-64 flex flex-col items-center py-10'>
        <img
          className='object-cover w-24 h-24 mb-2 rounded-full'
          src={person.imgUrl}
          alt='shoe'
        />
        <Pill
          classes='bg-black text-white'
          text={person.occupation}
          size='small'
        />
        <span className='mt-4 text-xl'>{person.fullName}</span>
      </Card>
    </div>
  );
};
