import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./language.css"
import { MdLanguage } from "react-icons/md";


const ToggleLanguage = () => {
    const { _, i18n } = useTranslation();
    const [lang, setLang] = useState("en");

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).catch((err) => {
            console.error('Error changing language:', err);
        });
    };

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'ge' : 'en';
        setLang(newLang);
        changeLanguage(newLang);
    };

    return (
        <div className='languages'>
            <button onClick={toggleLanguage}>
                <MdLanguage />
                {lang}
            </button>
        </div>
    );
};

export default ToggleLanguage;

