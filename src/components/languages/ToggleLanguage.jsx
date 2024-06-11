import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./language.css";
import { MdLanguage } from "react-icons/md";

const ToggleLanguage = () => {
    const { _, i18n } = useTranslation();
    const [lang, setLang] = useState("en");

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).catch((err) => {
            console.error('Error changing language:', err);
        });
    };

    const handleSelectChange = (event) => {
        const newLang = event.target.value;
        setLang(newLang);
        changeLanguage(newLang);
    };

    return (
        <div className='languages'>
            <MdLanguage />
            <select value={lang} onChange={handleSelectChange} className='language-select'>
                <option value="en" style={{ fontFamily: "cursive" }}>en</option>
                <option value="ge">ge</option>
            </select>
        </div>
    );
};

export default ToggleLanguage;

