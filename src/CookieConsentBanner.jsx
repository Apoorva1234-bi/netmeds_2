import React, { useState, useEffect } from 'react';

// Main component
const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className='banner'>
      <p>We use cookies on this site to enhance your user experience. By clicking the Accept button, you agree to us doing so. <a href="/more-info" style={styles.link}>More info</a></p>
      <div>
        <button onClick={handleAccept} style={styles.button}>Accept</button>
        <button onClick={handleDecline} style={styles.button}>No, thanks</button>
      </div>
    </div>
  );
};

// Styles for the banner
// const styles = {
//   banner: {
//     position: 'fixed',
//     bottom: 0,
//     width: '100%',
//     backgroundColor: '#00a69c',
//     color: 'white',
//     textAlign: 'center',
//     padding: '1em',
//     boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   button: {
//     marginLeft: '10px',
//     padding: '0.5em 1em',
//     backgroundColor: 'white',
//     color: '#00a69c',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '5px',
//   },
//   link: {
//     color: 'white',
//     textDecoration: 'underline',
//   }
// };

export default CookieConsentBanner;
