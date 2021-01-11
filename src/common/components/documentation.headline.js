import React from 'react';

const DocHeadline = ({iconLetter, description}) => {
    return (
        <div className="headline">
            <span className="headline-icon-letter">{iconLetter}</span>
            <span className="headline-description">{description}</span>
        </div>
    )
}

export default DocHeadline;