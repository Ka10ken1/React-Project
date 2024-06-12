import React, { useState } from "react";
import "./css/Search.css"
import { useTranslation } from "react-i18next";

function SearchInput({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [t, _] = useTranslation()

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div>
            <input
                className="search"
                type="text"
                placeholder={`${t("Search")}...`}
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchInput;

