import { useTranslation } from 'react-i18next';
import React from 'react';

const Blog = () => {
  const { t } = useTranslation();
  return (
    <div style={{ minHeight: '100vh', padding: '150px 80px 80px' }}>
      <h1>{t('misc.blog_page_title')}</h1>
      <p style={{ marginTop: '20px' }}>{t('misc.blog_page_desc')}</p>
    </div>
  );
};

export default Blog;
