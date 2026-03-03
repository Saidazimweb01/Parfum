import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from "../../images/logo2.png"
import { Instagram, Send, Youtube, MessageCircle } from 'lucide-react';
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id='foot' className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">

          {/* Brand Section */}
          <div className="brand-col">
             {/* <img width={170} src={logo} alt="" /> */}
            <div className="logo-area">
              {/* <span className="logo-tag">Perfumery · Community</span> */}
            </div>
            <p className="brand-text">{t('footer.brand_desc')}</p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
              <a href="https://t.me" target="_blank" rel="noreferrer"><Send size={20} /></a>
              <a href="https://vk.com" target="_blank" rel="noreferrer"><MessageCircle size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="links-col">
            <h4 className="footer-h4">{t('footer.col_perfume')}</h4>
            <ul className="footer-ul">
              <li><a href='#'>{t('footer.menu.niche')}</a ></li>
              <li><a href='#'>{t('footer.menu.vintage')}</a ></li>
              <li><a href='#'>{t('footer.menu.etiquette')}</a ></li>
              <li><a href='#'>{t('footer.menu.how_to_choose')}</a ></li>
            </ul>
          </div>

          <div className="links-col">
            <h4 className="footer-h4">{t('footer.col_help')}</h4>
            <ul className="footer-ul">
              <li><a href="#!">{t('footer.menu.delivery')}</a></li>
              <li><a href="#!">{t('footer.menu.auth')}</a></li>
              <li><a href="#!">{t('footer.menu.faq')}</a></li>
              <li><a href="#!">{t('footer.menu.account')}</a></li>
            </ul>
          </div>

          {/* Contacts Section */}
          <div className="links-col">
            <h4 className="footer-h4">{t('footer.col_contacts')}</h4>
            <ul className="footer-ul contacts">
              <li className="address-item">{t('footer.address')}</li>
              <li><a href="tel:+998935064174" className="phone-link">+998 93 506 41 74</a></li>
              <li><a href="mailto:support@you-perfume.ru">support@you-perfume.ru</a></li>
              <li className="hours-item">{t('footer.work_hours')}</li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="trust-bar">
          <div className="trust-card">
            <strong>{t('footer.trust.delivery_t')}</strong>
            <span>{t('footer.trust.delivery_s')}</span>
          </div>
          <div className="trust-card">
            <strong>{t('footer.trust.quality_t')}</strong>
            <span>{t('footer.trust.quality_s')}</span>
          </div>
          <div className="trust-card">
            <strong>{t('footer.trust.gift_t')}</strong>
            <span>{t('footer.trust.gift_s')}</span>
          </div>
          <div className="trust-card">
            <strong>{t('footer.trust.safe_t')}</strong>
            <span>{t('footer.trust.safe_s')}</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} YOU Perfumery & Art. {t('footer.bottom.rights')}.
          </div>
          <div className="legal-links">
            <a href="#!">{t('footer.bottom.privacy')}</a>
            <span className="dot"></span>
            <a href="#!">{t('footer.bottom.offer')}</a>
          </div>
          <div className="payment-icons">
            <span className="pay-tag">Visa</span>
            <span className="pay-tag">MC</span>
            <span className="pay-tag">MIR</span>
            <span className="pay-tag">UZCARD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}