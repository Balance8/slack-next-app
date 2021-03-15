import React, { FC, HTMLAttributes } from 'react';

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'leading' | 'following';
  classes?: string;
}

export const ListItem: FC<ListItemProps> = ({
  variant = 'leading',
  children,
  classes,
  ...rest
}) => {
  return (
    <div
      className={[
        classes,
        'rounded-xl p-2',
        `${variant === 'leading' ? '' : 'mt-6'}`,
      ].join(' ')}
      {...rest}>
      {children}
    </div>
  );
};

// <li>
//   <Link href='javascript:void(0)'>
//     <a className='text-xs leading-none text-gray-800 lg:text-sm hover:text-brand-dark dark:hover:text-brand-light dark:text-gray-50'>
//       Components
//     </a>
//   </Link>
// </li>
