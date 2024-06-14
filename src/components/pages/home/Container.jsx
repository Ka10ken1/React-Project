import React, { useState } from "react";
import Box from "./Box";
import Card from "./Card";
import SearchInput from "./Search";
import Filter from "./Filter";
import "./css/Container.css";
import HotelData from "./data/images";

const data = HotelData;

function Container() {
    const [selectedBoxes, setSelectedBoxes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ filters: [], priceRange: 500, isAvailable: false });

    const handleAddToCard = (box) => {
        setSelectedBoxes([...selectedBoxes, box]);
    };

    const handleRemoveFromCard = (idx) => {
        const updatedBoxes = [...selectedBoxes];
        updatedBoxes.splice(idx, 1);
        setSelectedBoxes(updatedBoxes);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleFilterChange = (updatedFilters) => {
        setFilters(updatedFilters);
    };

    const applyFilters = (data) => {
        const matchesFilters = filters.filters.length === 0 || filters.filters.some(filter => data.name.toLowerCase().includes(filter.toLowerCase()) || data.amenities.some(amenity => amenity.toLowerCase().includes(filter.toLowerCase())));
        const matchesPrice = data.price <= filters.priceRange;
        const matchesAvailability = !filters.isAvailable || data.isAvailable;

        return matchesFilters && matchesPrice && matchesAvailability;
    };

    const filteredImages = data.filter(data =>
        data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.amenities.some(amenity => amenity.toLowerCase().includes(searchTerm.toLowerCase())) ||
        data.price.toString().includes(searchTerm) ||
        data.roomId.toString().includes(searchTerm)
    ).filter(applyFilters);

    return (
        <div className="container">
            <div className="header">
                <SearchInput onSearch={handleSearch} />
                {
                    selectedBoxes.length !== 0 && (
                        <Card
                            selectedBoxes={selectedBoxes}
                            removeFromCard={handleRemoveFromCard}
                            setSelectedBoxes={setSelectedBoxes}
                        />
                    )
                }
            </div>

            <div className="box-container">
                <div className="filter-column">
                    <Filter onFilterChange={handleFilterChange} />
                </div>
                <div className="boxes-column">
                    {filteredImages.map((image, index) => (
                        <Box
                            key={index}
                            url={image.url}
                            name={image.name}
                            amenities={image.amenities}
                            onAddToCard={handleAddToCard}
                            price={image.price}
                            roomId={image.roomId}
                            isAvailable={image.isAvailable}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Container;

