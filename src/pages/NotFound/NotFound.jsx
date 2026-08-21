import { useTranslation } from 'react-i18next';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '120px', color: '#0B7887', margin: '0' }}>404</h1>
      <h2 style={{ fontSize: '32px', marginTop: '10px' }}>{t('misc.page_not_found')}</h2>
      <p style={{ marginTop: '15px', maxWidth: '500px', color: '#666' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" style={{ 
        marginTop: '30px', 
        padding: '12px 30px', 
        backgroundColor: '#0B7887', 
        color: '#fff',
        borderRadius: '30px',
        fontWeight: '600'
      }}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
