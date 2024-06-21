import React, { useState } from "react";
import Box from "./Box";
import Card from "./Card";
import SearchInput from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";
import "./css/Container.css";
import HotelData from "./data/images";

const data = HotelData;

function Container() {
    const [selectedBoxes, setSelectedBoxes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ filters: [], isAvailable: false });
    const [sortOptions, setSortOptions] = useState({ priceRange: 500, isAlphabetical: false });

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

    const handleSortChange = (updatedSortOptions) => {
        setSortOptions(updatedSortOptions);
    };

    const applyFilters = (data) => {
        const matchesFilters = filters.filters.length === 0 || filters.filters.some(filter => data.name.toLowerCase().includes(filter.toLowerCase()) || data.amenities.some(amenity => amenity.toLowerCase().includes(filter.toLowerCase())));
        const matchesPrice = data.price <= sortOptions.priceRange;
        const matchesAvailability = !filters.isAvailable || data.isAvailable;

        return matchesFilters && matchesPrice && matchesAvailability;
    };

    let filteredImages = data.filter(data =>
        data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.amenities.some(amenity => amenity.toLowerCase().includes(searchTerm.toLowerCase())) ||
        data.price.toString().includes(searchTerm) ||
        data.roomId.toString().includes(searchTerm)
    ).filter(applyFilters);

    if (sortOptions.isAlphabetical) {
        filteredImages = filteredImages.sort((a, b) => a.name.localeCompare(b.name));
    }

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
                <div className="">
                    <div className="filter-column">
                        <Filter onFilterChange={handleFilterChange} />
                    </div>
                    <div className="sort-column">
                        <Sort onSortChange={handleSortChange} />
                    </div>
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

