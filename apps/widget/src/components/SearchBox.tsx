import React from 'react';
import { SearchInput } from '@sina/ui';

export interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onEnter?: () => void;
  placeholder?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  onEnter,
  placeholder,
}) => {
  return (
    <div className="sina-search-box">
      <div className="sina-search-input-wrapper">
        <SearchInput
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onEnter={onEnter}
          placeholder={placeholder}
        />
        <svg
          className="sina-search-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

