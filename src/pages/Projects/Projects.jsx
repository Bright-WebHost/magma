import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gsap } from '../../utils/gsapConfig';
import Footer from '../../components/Footer/Footer';
import styles from './Projects.module.scss';

import img1  from '../../assets/images/img/1.webp';
import img2  from '../../assets/images/img/2.webp';
import img5  from '../../assets/images/img/5.webp';
import img9  from '../../assets/images/img/9.webp';
import img14 from '../../assets/images/img/14.webp';
import img17 from '../../assets/images/img/17.webp';
import { ArrowUpRight } from 'lucide-react';

// ─── Data ───────────────────────────────────────────────────

const filterTabs = ['All', 'Residential', 'Commercial', 'Hospitality', 'Restoration'];

const projects = [
  {
    id: 1,
    title: 'Residential Villa',
    subtitle: 'Custom marble flooring and staircase',
    badge: 'RESIDENTIAL',
    price: null,
    poa: false,
    image: img1,
    categories: ['All', 'Residential'],
    span: false,
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    subtitle: 'Granite exterior cladding and lobby',
    badge: 'COMMERCIAL',
    price: null,
    poa: false,
    image: img9,
    categories: ['All', 'Commercial'],
    span: false,
  },
  {
    id: 3,
    title: 'Luxury Hotel',
    subtitle: 'Onyx feature walls and custom vanities',
    badge: 'HOSPITALITY',
    price: null,
    poa: false,
    image: img17,
    categories: ['All', 'Hospitality'],
    span: true, // spans 2 rows in the grid
  },
  {
    id: 4,
    title: 'Private Residence',
    subtitle: 'Quartzite countertops and outdoor patio',
    badge: 'RESIDENTIAL',
    price: null,
    poa: false,
    image: img14,
    categories: ['All', 'Residential'],
    span: false,
  },
  {
    id: 5,
    title: 'Boutique Store',
    subtitle: 'Terrazzo flooring and display counters',
    badge: 'COMMERCIAL',
    price: null,
    poa: false,
    image: img2,
    categories: ['All', 'Commercial'],
    span: false,
  },
];

// ─── Component ───────────────────────────────────────────────

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('All');
  const heroRef       = useRef(null);
  const heroInnerRef  = useRef(null);
  const headerRef     = useRef(null);
  const gridRef       = useRef(null);
  const cardsRef      = useRef([]);

  const filteredProjects = projects.filter((p) =>
    p.categories.includes(activeFilter)
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        heroInnerRef.current?.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
      );

      // Section header
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 80%' },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  // Animate cards when filter changes
  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.08, ease: 'power3.out' }
      );
    }
  }, [activeFilter]);

  return (
    <div className={styles.projectsPage}>

      {/* ══════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════ */}
      <section className={styles.heroSection} ref={heroRef}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=85"
            alt="Luxury interior space"
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroInner} ref={heroInnerRef}>
            <div className={styles.heroBreadcrumb}>
              <span>{t('navbar.home', 'Home')}</span>
              <span className={styles.sep}>/</span>
              <span className={styles.active}>{t('navbar.projects', 'Projects')}</span>
            </div>
            <h1 className={styles.heroTitle}>{t('experience.title')}</h1>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HIGHLIGHTED PRODUCTS SECTION
      ══════════════════════════════════════════ */}
      <section className={styles.highlightSection}>
        <div className="container">

          {/* ── Section Header (dashed top border) ── */}
          <div className={styles.sectionHeader} ref={headerRef}>
            <div className={styles.headerTop}>
              {/* Left: label + heading */}
              <div className={styles.headerLeft}>
                <div className={styles.popularBadge}>
                  <span className={styles.popularIcon} aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="16" height="16" rx="3" fill="#af864cff"/>
                      <path d="M4 8h8M8 4v8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className={styles.popularText}>{t('projects_page.header_badge')}</span>
                </div>
                <h2 className={styles.sectionTitle}>{t('experience.title')}</h2>
              </div>

              {/* Right: description */}
              <p className={styles.sectionDesc}>
                {t('experience.p2')}
              </p>
            </div>

            {/* Dashed divider below header */}
            <div className={styles.dashedDivider} aria-hidden="true" />

            {/* Filter Tabs */}
            <div className={styles.filterRow}>
              <div className={styles.filterTabs}>
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    className={`${styles.filterTab} ${activeFilter === tab ? styles.active : ''}`}
                    onClick={() => setActiveFilter(tab)}
                  >
                    {t(`projects_page.filters.${tab}`)}
                  </button>
                ))}
              </div>
              <Link to="/contact" className={styles.inquireBtn}>
                {t('projects_page.quote_btn')} <ArrowUpRight strokeWidth={0.75} />
              </Link>
            </div>
          </div>

          {/* ── Masonry-style Product Grid ── */}
          <div className={styles.productsGrid}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.productCard} ${project.span ? styles.cardSpan : ''}`}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                {/* Background image */}
                <div className={styles.cardImg}>
                  <img src={project.image} alt={t(`projects_page.items.${index}.title`)} />
                </div>

                {/* Overlay gradient */}
                <div className={styles.cardOverlay} aria-hidden="true" />

                {/* Badge — top right */}
                <div className={styles.cardBadge}>{t(`projects_page.badges.${project.badge}`)}</div>

                {/* Info — bottom */}
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardTitle}>{t(`projects_page.items.${index}.title`)}</h3>
                  <p className={styles.cardSubtitle}>{t(`projects_page.items.${index}.subtitle`)}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════════ */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <div className={styles.sectionMeta}>
                <span className={styles.metaLine} />
                <span className={styles.metaLabel}>{t('projects_page.cta.label')}</span>
              </div>
              <h2 className={styles.ctaHeading}>{t('projects_page.cta.heading')}</h2>
              <p className={styles.ctaDesc}>
                {t('projects_page.cta.desc')}
              </p>
            </div>
            <Link to="/contact" className={styles.ctaButton}>
              {t('projects_page.cta.btn')} <ArrowUpRight strokeWidth={0.75} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
