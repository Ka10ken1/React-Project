import React, { useState } from "react";
import Box from "./Box";
import Card from "./Card";
import SearchInput from "./Search";
import Filter from "./Filter";
import "./css/Container.css";
import HotelData from "./data/images";


const images = HotelData;

function Container() {
    const [selectedBoxes, setSelectedBoxes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ filters: [], priceRange: 500 });

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

    const applyFilters = (image) => {
        const matchesFilters = filters.filters.length === 0 || filters.filters.some(filter => image.description.toLowerCase().includes(filter.toLowerCase()));
        const matchesPrice = image.price <= filters.priceRange;
        return matchesFilters && matchesPrice;
    };

    const filteredImages = images.filter(image =>
        image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.price.toString().includes(searchTerm)
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
                            description={image.description}
                            onAddToCard={handleAddToCard}
                            price={image.price}
                            roomId={image.roomId}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Container;

