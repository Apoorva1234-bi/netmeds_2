import React, { useState } from 'react';

const HoverCard = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // Event handlers for triggering element
  const handleMouseEnter = () => {
    setIsCardVisible(true);
  };

  const handleMouseLeave = () => {
    if (!isCardHovered) {
      setIsCardVisible(false);
    }
  };

  // Event handlers for card
  const handleCardMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleCardMouseLeave = () => {
    setIsCardHovered(false);
    setIsCardVisible(false);
  };

  return (
    <div>
      <div
        style={{
          padding: '20px',
          backgroundColor: 'lightgrey',
          cursor: 'pointer',
          display: 'inline-block',
          position: 'relative'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me!
        {isCardVisible && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '20px',
              backgroundColor: 'white',
              border: '1px solid #ddd',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              zIndex: 1
            }}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            This is the card content.
          </div>
        )}
      </div>
    </div>
  );
};

export default HoverCard;
