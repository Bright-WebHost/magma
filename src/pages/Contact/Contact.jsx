import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from '../../utils/gsapConfig';
import Footer from '../../components/Footer/Footer';
import styles from './Contact.module.scss';

// ─── Component ───────────────────────────────────────────────

const Contact = () => {
  const { t } = useTranslation();
  const heroRef      = useRef(null);
  const heroInnerRef = useRef(null);
  const infoRef      = useRef(null);
  const formRef      = useRef(null);
  const mapRef       = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1200);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        heroInnerRef.current?.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
      );

      // Info cards
      if (infoRef.current) {
        gsap.fromTo(
          infoRef.current.querySelectorAll(`.${styles.infoCard}`),
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: infoRef.current, start: 'top 80%' },
          }
        );
      }

      // Form panel
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: formRef.current, start: 'top 80%' },
          }
        );
      }

      // Map
      if (mapRef.current) {
        gsap.fromTo(
          mapRef.current,
          { opacity: 0 },
          {
            opacity: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: mapRef.current, start: 'top 85%' },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.contactPage}>

      {/* ══════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════ */}
      <section className={styles.heroSection} ref={heroRef}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85"
            alt="Studio workspace"
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroInner} ref={heroInnerRef}>
            <div className={styles.heroBreadcrumb}>
              <span>{t('navbar.home', 'Home')}</span>
              <span className={styles.sep}>/</span>
              <span className={styles.active}>{t('contact_page.breadcrumb')}</span>
            </div>
            <h1 className={styles.heroTitle}>{t('contact_page.title')}</h1>
            {/* <p className={styles.heroSubtitle}>
              Have a project in mind? Our team is ready to listen, advise and deliver.
            </p> */}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT INFO CARDS
      ══════════════════════════════════════════ */}
      {/* <section className={styles.infoSection} ref={infoRef}>
        <div className="container">

          <div className={styles.infoGrid}> */}

            {/* Phone */}
            {/* <div className={styles.infoCard}>
              <div className={styles.infoIconWrap}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.56 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.47 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.09 6.09l1.27-.81a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    stroke="#0B7887" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.infoCardBody}>
                <span className={styles.infoLabel}>{t('misc.call_us')}</span>
                <a href="tel:+22544884422" className={styles.infoValue}>+225 44884422</a>
              </div>
            </div> */}

            {/* Email */}
            {/* <div className={styles.infoCard}>
              <div className={styles.infoIconWrap}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="#0B7887" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="#0B7887" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.infoCardBody}>
                <span className={styles.infoLabel}>{t('misc.email_us')}</span>
                <a href="mailto:hello@magmastone.com" className={styles.infoValue}>hello@magmastone.com</a>
                <a href="mailto:support@magmastone.com" className={styles.infoValueSub}>support@magmastone.com</a>
              </div>
            </div> */}

            {/* Address */}
            {/* <div className={styles.infoCard}>
              <div className={styles.infoIconWrap}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    stroke="#0B7887" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                  <circle
                    cx="12" cy="10" r="3"
                    stroke="#0B7887" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.infoCardBody}>
                <span className={styles.infoLabel}>{t('misc.visit_us')}</span>
                <span className={styles.infoValue}>{t('misc.address_line1')}</span>
                <span className={styles.infoValueSub}>{t('misc.address_line2')}</span>
              </div>
            </div> */}

            {/* Hours */}
            {/* <div className={styles.infoCard}>
              <div className={styles.infoIconWrap}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#0B7887" strokeWidth="1.5"/>
                  <polyline
                    points="12,6 12,12 16,14"
                    stroke="#0B7887" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.infoCardBody}>
                <span className={styles.infoLabel}>{t('misc.working_hours')}</span>
                <span className={styles.infoValue}>{t('misc.hours_week')}</span>
                <span className={styles.infoValueSub}>{t('misc.hours_sun')}</span>
              </div>
            </div> */}

          {/* </div>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════
          FORM + SIDE INFO PANEL
      ══════════════════════════════════════════ */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formGrid}>

            {/* Left: Form */}
            <div className={styles.formWrap} ref={formRef}>

              <div className={styles.sectionMeta}>
                <span className={styles.metaLine} />
                <span className={styles.metaLabel}>{t('contact_page.form.label')}</span>
              </div>

              <h2 className={styles.formHeading}>
                {t('contact_page.form.heading')}
              </h2>

              {submitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#0B7887" strokeWidth="1.5"/>
                      <polyline points="9,12 11,14 15,10" stroke="#0B7887" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>{t('contact_page.form.success_title')}</h3>
                  <p>{t('contact_page.form.success_desc')}</p>
                  <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>
                    {t('contact_page.form.success_btn')}
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">{t('contact_page.form.name_label')} <span>*</span></label>
                      <input
                        id="name" type="text" name="name"
                        placeholder={t('contact_page.form.name_placeholder')}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">{t('contact_page.form.email_label')} <span>*</span></label>
                      <input
                        id="email" type="email" name="email"
                        placeholder={t('contact_page.form.email_placeholder')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">{t('contact_page.form.phone_label')}</label>
                      <input
                        id="phone" type="tel" name="phone"
                        placeholder={t('contact_page.form.phone_placeholder')}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="subject">{t('contact_page.form.subject_label')} <span>*</span></label>
                      <select
                        id="subject" name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>{t('contact_page.form.subject_default')}</option>
                        <option value="marble">{t('contact_page.form.subjects.marble')}</option>
                        <option value="installation">{t('contact_page.form.subjects.installation')}</option>
                        <option value="consultation">{t('contact_page.form.subjects.consultation')}</option>
                        <option value="restoration">{t('contact_page.form.subjects.restoration')}</option>
                        <option value="other">{t('contact_page.form.subjects.other')}</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">{t('contact_page.form.message_label')} <span>*</span></label>
                    <textarea
                      id="message" name="message"
                      placeholder={t('contact_page.form.message_placeholder')}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span className={styles.btnSpinner} />
                    ) : (
                      t('contact_page.form.submit_btn')
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Info sidebar */}
            <aside className={styles.sidePanel}>

              <div className={styles.sidePanelInner}>

                <div className={styles.sectionMeta}>
                  <span className={styles.metaLine} />
                  <span className={styles.metaLabel}>{t('contact_page.side.label')}</span>
                </div>

                <h3 className={styles.sidePanelHeading}>
                  {t('contact_page.side.heading')}
                </h3>

                <p className={styles.sidePanelDesc}>
                  {t('contact_page.side.desc')}
                </p>

                <ul className={styles.sideContactList}>
                  <li>
                    <div className={styles.sideContactIcon}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.56 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.47 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.09 6.09l1.27-.81a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <span className={styles.sideContactLabel}>{t('contact_page.side.phone')}</span>
                      <a href="tel:+22544884422" className={styles.sideContactValue}>+225 44884422</a>
                    </div>
                  </li>
                  <li>
                    <div className={styles.sideContactIcon}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <span className={styles.sideContactLabel}>{t('contact_page.side.email')}</span>
                      <a href="mailto:hello@magmastone.com" className={styles.sideContactValue}>hello@magmastone.com</a>
                    </div>
                  </li>
                  <li>
                    <div className={styles.sideContactIcon}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <span className={styles.sideContactLabel}>{t('contact_page.side.address')}</span>
                      <span className={styles.sideContactValue} dangerouslySetInnerHTML={{ __html: t('contact_page.side.address_value') }}></span>
                    </div>
                  </li>
                </ul>

                {/* Social links */}
                <div className={styles.socialRow}>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    aria-label="Instagram" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    aria-label="LinkedIn" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/magmazco/" target="_blank" rel="noopener noreferrer"
                    aria-label="Facebook" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                    aria-label="Twitter" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GOOGLE MAP
      ══════════════════════════════════════════ */}
      <div className={styles.mapSection} ref={mapRef}>
        {/* <div className={styles.mapHeader}>
          <div className="container">
            <div className={styles.mapHeaderInner}>
              <div className={styles.sectionMeta}>
                <span className={styles.metaLine} />
                <span className={styles.metaLabel}>{t('misc.find_us')}</span>
              </div>
              <h2 className={styles.mapHeading}>{t('misc.studio_location')}</h2>
            </div>
          </div>
        </div> */}

        <div className={styles.mapFrame}>
          <iframe
            title="Magma Stone Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.2398068893194!2d-3.9799325244344277!3d5.283078722682465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ef0106777d99%3A0xc4ce54bf00b2323a!2sMAGMA!5e1!3m2!1sen!2sin!4v1787213817615!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          {/* Map overlay card */}
          {/* <div className={styles.mapOverlayCard}>
            <div className={styles.mapCardIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                  stroke="#0B7887" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3"
                  stroke="#0B7887" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className={styles.mapCardTitle}>{t('misc.studio_name')}</p>
              <p className={styles.mapCardAddr}>{t('misc.studio_address_short')}</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
};

export default Contact;
