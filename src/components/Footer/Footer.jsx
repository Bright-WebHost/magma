import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import logo from '../../assets/images/img/logo.png';
import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Column 1: Logo + Description */}
          <div className={styles.col}>
            <div className={styles.footerLogo}>
              <Link to="/">
                <img src={logo} alt="Magma Logo" style={{ height: '40px', width: 'auto' }} />
              </Link>
            </div>
            <p className={styles.footerDesc}>
              {t('footer.desc')}
            </p>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/profile.php?id=61591578427858" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/magmastoneco/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('footer.services_title')}</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/services">{t('footer.marble_fabrication')}</Link></li>
              <li><Link to="/services">{t('footer.stone_installation')}</Link></li>
              <li><Link to="/customization">{t('footer.customization')}</Link></li>
              <li><Link to="/services">{t('footer.surface_restoration')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('footer.quick_links')}</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/about">{t('navbar.about')}</Link></li>
              <li><Link to="/products">{t('navbar.products')}</Link></li>
              <li><Link to="/projects">{t('navbar.projects')}</Link></li>
              <li><Link to="/contact">{t('navbar.contact')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('footer.contact_title')}</h4>
            <ul className={styles.footerLinks}>
              <li><span style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '13px', lineHeight: '1.6', display: 'inline-block' }}>{t('footer.address')}</span></li>
              <li><a href="tel:+22544884422">{t('footer.phone')}</a></li>
              <li><a href="mailto:hello@magmastone.com">{t('footer.email')}</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          {/* <div className={styles.bottomLinks}>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
