import React, {useState} from 'react';

const FilterSidebar = ({onFilterHandler}) => {

    const types = ["Running", "Casual", "Formal", "Sports"];
    const colors = ["White", "Red", "Blue", "Black"];
    const sizes = ["36", "37", "39", "40", "41", "42"];
    const gender = ["Men", "Women", "Kids"];
    const others = ["New Arrivals", "Best Sellers", "Discounted", "Seasonal", "Limited Edition"];

    const [filterOptions, setFilterOptions] = useState({
        types: [],
        colors: [],
        sizes: [],
        gender: [],
        others: []
    });

    function handleCheckboxChange(category, value, checked) {
        setFilterOptions( (prev) => {
            const prevValues = prev[category];

            const newValues = checked ? [...prevValues, value] : prevValues.filter((item) => item !== value);

            const nextFilters = {
                ...prev,
                [category]: newValues
            }
            onFilterHandler(nextFilters);
            return nextFilters;
        });

        
    }

    return (
        <div className="filter-sidebar">
            <div>
                <h2>Types</h2>
                <ul>
                    {types.map( (type, index) => (
                        <li key={index}>
                            <input 
                                type="checkbox"
                                value={type}
                                checked={filterOptions.types.includes(type)}
                                onChange={(e) => handleCheckboxChange("types", type, e.target.checked)}
                            />
                            {type}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Colors</h2>
                <ul>
                    {colors.map( (color, index) => (
                        <li key={index}>
                            <input 
                                type="checkbox"
                                value={color}
                                checked={filterOptions.colors.includes(color)}
                                onChange={(e) => handleCheckboxChange("colors", color, e.target.checked)}
                            />
                            {color}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Sizes</h2>
                <ul>
                    {sizes.map( (size, index) => (
                        <li key={index}>
                            <input 
                                type="checkbox"
                                value={size}
                                checked={filterOptions.sizes.includes(size)}
                                onChange={(e) => handleCheckboxChange("sizes", size, e.target.checked)}
                            />
                            {size}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Gender</h2>
                <ul>
                    {gender.map( (genderOption, index) => (
                        <li key={index}>
                            <input 
                                type="checkbox"
                                value={genderOption}
                                checked={filterOptions.gender.includes(genderOption)}
                                onChange={(e) => handleCheckboxChange("gender", genderOption, e.target.checked)}
                            />
                            {genderOption}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Others</h2>
                <ul>
                    {others.map( (otherOption, index) => (
                        <li key={index}>
                            <input 
                                type="checkbox"
                                value={otherOption}
                                checked={filterOptions.others.includes(otherOption)}
                                onChange={(e) => handleCheckboxChange("others", otherOption, e.target.checked)}
                            />
                            {otherOption}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default FilterSidebar;