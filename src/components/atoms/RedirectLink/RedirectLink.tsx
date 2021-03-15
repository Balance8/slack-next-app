import Link from 'next/link';
import React, { AnchorHTMLAttributes, FC } from 'react';

export interface RedirectLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  classes?: string;
}

export const RedirectLink: FC<RedirectLinkProps> = ({
  children,
  classes,
  text,
  ...rest
}) => {
  return (
    <Link href='javascript:void(0)' passHref>
      <a
        className={[
          classes,
          text,
          'text-xs leading-none text-gray-800 lg:text-sm hover:text-brand-dark dark:hover:text-brand-light dark:text-gray-50',
        ].join(' ')}
        {...rest}>
        {text}
        {children}
      </a>
    </Link>
  );
};
