import React, { useState } from "react";
import "./css/Filter.css";
import { useTranslation } from "react-i18next";

function Filter({ onFilterChange }) {
    const [activeFilters, setActiveFilters] = useState([]);
    const [isAvailable, setIsAvailable] = useState(false);
    const [t, _] = useTranslation();

    const handleCheckboxChange = (filter) => {
        let updatedFilters;
        if (activeFilters.includes(filter)) {
            updatedFilters = activeFilters.filter(f => f !== filter);
        } else {
            updatedFilters = [...activeFilters, filter];
        }
        setActiveFilters(updatedFilters);
        onFilterChange({
            filters: updatedFilters,
            isAvailable: isAvailable
        });
    };

    const handleAvailableChange = () => {
        setIsAvailable(!isAvailable);
        onFilterChange({
            filters: activeFilters,
            isAvailable: !isAvailable
        });
    };

    const amenities = [
        { value: "Restaurant", label: t("Restaurant") },
        { value: "Swimming Pool", label: t("Swimming Pool") },
        { value: "Spa", label: t("Spa") },
        { value: "Water Sports", label: t("Water Sports") }
    ];

    return (
        <div className="filter">
            <h3 className="filter-title">{t("Filter")}</h3>
            <div className="checkboxes">
                {amenities.map((amenity) => (
                    <label className="checkbox-label" key={amenity.value}>
                        <input
                            type="checkbox"
                            value={amenity.value}
                            onChange={() => handleCheckboxChange(amenity.value)}
                        />
                        {amenity.label}
                    </label>
                ))}
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        value="Available"
                        onChange={handleAvailableChange}
                    />
                    {t("Available")}
                </label>
            </div>
        </div>
    );
}

export default Filter;

