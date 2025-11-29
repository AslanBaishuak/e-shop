import React, { useState } from "react";

const FilterSideBar = ( {onFilterHandler}) => {
    const types = ["Running","Casual","Formal","Sports"];
    const colors = ["White",'Red',"Blue","Black"];
    const sizes = ["36","37","39","40","41","42"];
    const genders = ["Male", "Female"];
    const others = ["New arrivals", "Bestsellers","Seasonal"];

    const [filterOptions, setFilterOPtions] = useState({
        types: [],
        colors: [],
        sizes: [],
        genders: [],
        others: []
    });

    function handleCheckboxChange (category, value, checked){
        setFilterOPtions( (prev) => {
            const prevValues = prev[category];

            const newValues = checked ? [...prevValues, value] : prevValues.filter((item) => item !== value);

            const nextFilters = {
                ...prev,
                [category]: newValues
            }
             
            console.log(nextFilters);

            onFilterHandler(nextFilters);
            return nextFilters;
        });
    };
    return(
        <div className="filter-sidebar">
            <div>
                <h2>Types</h2>
                <ul>
                    {types.map( (type,index) =>(
                        <li key={index}>
                            <input type="checkbox" 
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
                    {colors.map( (color,index) =>(
                        <li key={index}>
                            <input type="checkbox"  
                                    value={color}
                                   checked={filterOptions.colors.includes(color)}
                                   onChange={(e) => handleCheckboxChange("colors", color, e.target.checked)}/>
                            {color}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Sizes</h2>
                <ul>
                    {sizes.map( (sizes,index) =>(
                        <li key={index}>
                            <input type="checkbox"  
                                    value={sizes}
                                   checked={filterOptions.sizes.includes(sizes)}
                                   onChange={(e) => handleCheckboxChange("sizes", sizes, e.target.checked)}/>
                            {sizes}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Genders</h2>
                <ul>
                    {genders.map( (genders,index) =>(
                        <li key={index}>
                            <input type="checkbox"  
                                    value={genders}
                                   checked={filterOptions.genders.includes(genders)}
                                   onChange={(e) => handleCheckboxChange("genders", genders, e.target.checked)}/>
                            {genders}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Others</h2>
                <ul>
                    {others.map( (others,index) =>(
                        <li key={index}>
                            <input type="checkbox"  
                                    value={others}
                                   checked={filterOptions.others.includes(others)}
                                   onChange={(e) => handleCheckboxChange("others", others, e.target.checked)}/>
                            {others}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default FilterSideBar;