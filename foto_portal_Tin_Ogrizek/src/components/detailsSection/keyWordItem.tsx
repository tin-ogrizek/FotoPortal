import React from 'react';
import '../../styles/keyWords.css'

interface KeywordItemProps {
  text: string;
}

const KeywordItem: React.FC<KeywordItemProps> = ({ text }) => {
  return (
    <div className="keyword-item">
      {text}
    </div>
  );
};

export default KeywordItem;
