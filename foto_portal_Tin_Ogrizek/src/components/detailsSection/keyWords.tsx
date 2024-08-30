import React from 'react';
import KeywordItem from './keyWordItem';
import '../../styles/keyWords.css'

const KeyWords: React.FC = () => {
    const keywords = ["Nogomet", "Italija", "Serie A", "Genua", "Italien", "Fussball", "Soccer"];

    return (
        <div className="keywords-container">
            <h4>KLJUČNE RIJEČI</h4>
            <div className="keywords-list">
                {keywords.map((keyword, index) => (
                    <KeywordItem key={index} text={keyword} />
                ))}
            </div>
        </div>
    );
};

export default KeyWords;