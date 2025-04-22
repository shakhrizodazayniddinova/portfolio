import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const storageLang = localStorage.getItem('lang') || 'en';
  const [selectedLang, setSelectedLang] = useState(storageLang);

  const handleChange = (e) => {
    const lang = e.target.value;
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  const options = [
    { value: 'uz', label: 'uz', flag: 'uz' },
    { value: 'en', label: 'en', flag: 'us' },
    { value: 'ru', label: 'ru', flag: 'ru' },
  ];

  const flagMap = {
    uz: 'uz',
    en: 'us',
    ru: 'ru',
  };

  useEffect(() => {
    i18n.changeLanguage(storageLang);
  }, [i18n, storageLang]);

  return (
    <div className="lang-switcher" style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ height: '35px' }}>
        <Flag
          code={flagMap[selectedLang]}
          style={{ width: '35px', height: '35px', objectFit: 'cover', borderRadius: '50%' }}
        />
      </div>

      {/* Select list */}
      <select
        value={selectedLang}
        onChange={handleChange}

        style={{
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'white',
          overflow: 'hidden',
          width: '20px'
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} style={{ backgroundColor: '#040b14' }}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
