import React from 'react';

export interface SuggestionItemProps {
  text: string;
  onClick: () => void;
  className?: string;
  highlight?: string;
}

export const SuggestionItem: React.FC<SuggestionItemProps> = ({
  text,
  onClick,
  className = '',
  highlight,
}) => {
  const renderText = () => {
    if (!highlight) {
      return text;
    }

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={index} className="sina-highlight">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <li
      className={className ? `sina-suggestion-item ${className}` : 'sina-suggestion-item'}
      onClick={onClick}
      role="option"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {renderText()}
    </li>
  );
};

