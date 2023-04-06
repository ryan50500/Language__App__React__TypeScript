import React, { useState } from 'react';
import TeacherArray from '../TeacherArray';
import TeacherBorder from './TeacherBorder';
import SearchLanguage from './SearchLanguage';
import TeacherStyles from './TeacherStyles.module.css';
import PriceFilterStyles from './PriceFilterStyles.module.css';

interface Props {
    initialInputText: string | number;
}

const FilteredTeachers: React.FC<Props> = ({ initialInputText }) => {
    const [inputText, setInputText] = useState<string | number>(initialInputText);
    const [inputPrice, setInputPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(50);

    // filter the results by language searched for
    let filteredTeachers = TeacherArray.filter(
        (arrayMatched) =>
            arrayMatched.language.toLowerCase().indexOf(inputText.toString()) !== -1
    );

    // filter the results by price by assinging 'filteredTeachers' to a new array
    filteredTeachers = filteredTeachers.filter(
        (arrayMatched) => arrayMatched.price >= inputPrice && arrayMatched.price <= maxPrice
    );

    // this function is called when user selects a price range
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputPrice(parseInt(event.target.value));
    };

    return (
        <>
            <span>Filter by price: {inputPrice} - {maxPrice}</span>
            <div>
                <label htmlFor="priceRange">Price:</label>
                <input
                    type="range"
                    id="priceRange"
                    name="priceRange"
                    min="0"
                    max="50"
                    step="5"
                    value={inputPrice}
                    onChange={handlePriceChange}
                    className={PriceFilterStyles.priceSlider}
                />
            </div>
            {/* filter the results by language */}
            <SearchLanguage inputText={inputText} setInputText={setInputText} filteredTeachers={filteredTeachers} />
            {filteredTeachers.map((arrayItem) => {
                return (
                    <TeacherBorder key={arrayItem.id}>
                        <div className={TeacherStyles.teacher}>
                            <h2>{arrayItem.language}</h2>
                            <h3>{arrayItem.name}</h3>
                            <h4>Experience: {arrayItem.experience}</h4>
                            <h5>Country of birth: {arrayItem.country}</h5>
                            <h5 className={TeacherStyles.price}>Price: {arrayItem.price}</h5>
                        </div>
                    </TeacherBorder>
                );
            })}
        </>
    );
};

export default FilteredTeachers;
