import React, { useState } from 'react';
import productDate from "../products.json";
import SelectedCategory from '../components/SelectedCategory';

const title = <h2>Search Your One From <span>Thou</span>sand of Products </h2>;
const desc = "We have the largest collection of products";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More than 2000 Merchants",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productDate);

    //search functionality
    const handleSearch = e => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        //filtering products on search
        const filtered = productDate.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredProducts(filtered);
    };

    return (
        <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content">
                    {title}
                    <form className="search-form">
                        <SelectedCategory select="all" className="category-select"/>
                        <input 
                            type="text" 
                            name="search" 
                            id="search" 
                            placeholder="search your product/raadi waxaad rabto" 
                            value={searchInput}
                            onChange={handleSearch}
                        />
                        <button type="submit">
                            <i className="icofont-search-2"></i>
                        </button>
                    </form>
                    <p>{desc}</p>
                    <ul className="lab-ul">
                        {searchInput && filteredProducts.map((product, i) => (
                            <li key={i}>
                                <a href={`/shop/${product.id}`}>{product.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;