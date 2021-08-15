import * as React from 'react';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';

/* const stackTokens: Partial<IStackTokens> = { childrenGap: 20 }; */
export interface ISearchBoxProps {
    placeholder : string ; 
    onSearch?: () => unknown;
    disableAnimation : boolean;
    stackTokens : Partial<IStackTokens>
}
/* eslint-disable react/jsx-no-bind */
export const MySearchBox: React.FC<ISearchBoxProps> = ({
    placeholder,
    onSearch,
    disableAnimation,
    stackTokens
}) => {
  return (
    <Stack tokens={stackTokens}>
      <SearchBox
        placeholder={placeholder}
        onChange={onSearch}
        disableAnimation = {disableAnimation}
      />
    </Stack>
  );
};
