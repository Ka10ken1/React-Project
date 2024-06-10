import React, { useState } from "react";
import Box from "./Box";
import Card from "./Card";
import SearchInput from "./Search";
import FilterDropdown from "./FilterDropdown";
import "./css/Container.css";

const images = [
    {
        url: '/regular-nice.png',
        name: 'Hotel Blue Horizon',
        description: 'Experience luxury and comfort at Hotel Blue Horizon. Located in the heart of the city, our hotel offers breathtaking views and top-notch amenities.',
        price: 50
    },
    {
        url: '/regular-white.jpg',
        name: 'Seaside Retreat',
        description: 'Escape to Seaside Retreat, where tranquility meets adventure. Nestled along the coast, our hotel provides easy access to sandy beaches and crystal-clear waters.',
        price: 100
    },
    {
        url: '/water.png',
        name: 'Mountain Lodge',
        description: 'Immerse yourself in nature\'s beauty at Mountain Lodge. Surrounded by towering peaks and lush forests, our hotel is the perfect destination for outdoor enthusiasts.',
        price: 200
    },
    {
        url: '/regular-nice.png',
        name: 'Urban Oasis',
        description: 'Discover the charm of the city at Urban Oasis. With its modern design and convenient location, our hotel offers a relaxing retreat amidst the hustle and bustle.',
        price: 50
    },
    {
        url: '/regular-white.jpg',
        name: 'Tranquil Haven',
        description: 'Find peace and serenity at Tranquil Haven. Tucked away in a serene countryside setting, our hotel provides a peaceful escape from the everyday.',
        price: 50
    },
    {
        url: '/water.png',
        name: 'Riverside Resort',
        description: 'Experience riverside luxury at Riverside Resort. Situated on the banks of a picturesque river, our hotel offers stunning views and endless relaxation.',
        price: 200
    },
    {
        url: '/regular-nice.png',
        name: 'Sunset Vista',
        description: 'Enjoy breathtaking sunsets at Sunset Vista. Perched atop a hill, our hotel boasts panoramic views of the surrounding landscape and a serene atmosphere.',
        price: 50
    },
    {
        url: '/regular-white.jpg',
        name: 'Eco Retreat',
        description: 'Embrace sustainability at Eco Retreat. Surrounded by nature\'s wonders, our eco-friendly hotel offers a guilt-free getaway for environmentally-conscious travelers.',
        price: 100
    },
    {
        url: '/water.png',
        name: 'Tropical Paradise',
        description: 'Escape to a tropical paradise at Tropical Paradise. With its lush gardens and exotic ambiance, our hotel transports you to a world of relaxation and indulgence.',
        price: 150
    },
    {
        url: '/noice.png',
        name: 'Serenity Cove',
        description: 'Experience tranquility at Serenity Cove. Nestled in a secluded cove, our hotel offers a peaceful retreat where you can unwind and recharge.',
        price: 150
    },
    {
        url: '/regular-nice.png',
        name: 'Sunset Vista',
        description: 'Enjoy breathtaking sunsets at Sunset Vista. Perched atop a hill, our hotel boasts panoramic views of the surrounding landscape and a serene atmosphere.',
        price: 50
    },
    {
        url: '/regular-white.jpg',
        name: 'Eco Retreat',
        description: 'Embrace sustainability at Eco Retreat. Surrounded by nature\'s wonders, our eco-friendly hotel offers a guilt-free getaway for environmentally-conscious travelers.',
        price: 100
    },
    {
        url: '/water.png',
        name: 'Tropical Paradise',
        description: 'Escape to a tropical paradise at Tropical Paradise. With its lush gardens and exotic ambiance, our hotel transports you to a world of relaxation and indulgence.',
        price: 150
    },
    {
        url: '/noice.png',
        name: 'Serenity Cove',
        description: 'Experience tranquility at Serenity Cove. Nestled in a secluded cove, our hotel offers a peaceful retreat where you can unwind and recharge.',
        price: 150
    }

];

function Container() {
    const [selectedBoxes, setSelectedBoxes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const handleAddToCard = (box) => {
        const arr = [...selectedBoxes, box];
        setSelectedBoxes(arr);
    };

    const handleRemoveFromCard = (idx) => {
        const updatedBoxes = [...selectedBoxes];
        updatedBoxes.splice(idx, 1);
        setSelectedBoxes(updatedBoxes);
    };


    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    const filteredImages = images.filter(image =>
        image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.price.toString().includes(searchTerm)
    );

    const sortedImages = [...filteredImages].sort((a, b) => {
        if (filter === 'priceLowToHigh') return a.price - b.price;
        if (filter === 'priceHighToLow') return b.price - a.price;
        return 0;
    });

    return (
        <div className="cont-container">
            <div className="controls">
                <SearchInput onSearch={handleSearch} />
                <FilterDropdown onFilterChange={handleFilterChange} />
            </div>
            {selectedBoxes.length !== 0 && (
                <Card
                    selectedBoxes={selectedBoxes}
                    removeFromCard={handleRemoveFromCard}
                    setSelectedBoxes={setSelectedBoxes}
                />
            )}
            <div className="container">
                {sortedImages.map((image, index) => (
                    <Box
                        key={index}
                        url={image.url}
                        name={image.name}
                        description={image.description}
                        onAddToCard={handleAddToCard}
                        price={image.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Container;

