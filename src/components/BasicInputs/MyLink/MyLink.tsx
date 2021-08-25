import * as React from 'react';
import { Link, Text } from '@fluentui/react';

export interface ILinkProps{
    textDescription : string ; 
    linkDescription : string;
    href : string ;
    onLinkClick : () => unknown;
    disabled : boolean;
    underline : boolean;
}

export const MyLink: React.FC<ILinkProps> = ({
    textDescription,
    linkDescription,
    href,
    onLinkClick,
    disabled,
    underline
}) => {
  return (
    <div>
      <Text>
        {textDescription},{' '}
        <Link href={href} underline={underline}>
         {linkDescription}
        </Link>{' '}
        Without an href,{' '}
        <Link onClick={onLinkClick} underline={underline}>
        {linkDescription}
        </Link>
        {linkDescription}{' '}
        <Link disabled={disabled} href={href} underline={underline}>
        {linkDescription}
        </Link>
      </Text>
      <Text>
      {textDescription}
      </Text>
    </div>
  );
};
