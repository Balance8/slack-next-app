import Link, { LinkProps } from 'next/link';
import React, { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';

export interface RedirectLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    PropsWithChildren<LinkProps> {
  classes?: string;
  href: string;
}

export const RedirectLink: FC<RedirectLinkProps> = ({
  children,
  classes,
  href,
  ...rest
}) => {
  return (
    <Link href={href} passHref>
      <a
        className={[
          classes,
          'text-xs leading-none text-gray-800 lg:text-sm hover:text-brand dark:hover:text-brand-light dark:text-gray-50',
        ].join(' ')}
        {...rest}>
        {children}
      </a>
    </Link>
  );
};
