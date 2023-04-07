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
    const [maxPrice, setMaxPrice] = useState<number>(50);
    const [teacherBirthCountry, setTeacherBirthCountry] = useState<string>("");
    const [teacherAvailability, setTeacherAvailability] = useState<string>("");


    // filter the results by language searched, price, birth country of teacher, and teacher availabilty 
    let filteredTeachers = TeacherArray.filter(
        (arrayMatched) =>
            arrayMatched.language.toLowerCase().indexOf(inputText.toString()) !== -1 &&
            arrayMatched.price < maxPrice && arrayMatched.country.toLowerCase().indexOf(teacherBirthCountry.toString()) !== -1 &&
            arrayMatched.availability.toLowerCase().indexOf(teacherAvailability.toString()) !== -1
    );


    // remove Price filter
    const removePriceFilter = () => {
        setMaxPrice(50);
        // setMaxPrice(50);
    };

    // this function is called when user selects a price range
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(parseInt(event.target.value));
        // setMaxPrice(parseInt(event.target.value));
    };

    // filter teachers by Birth Country
    const handleBirthCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTeacherBirthCountry(event.target.value);
        // setMaxPrice(parseInt(event.target.value));
    };

    // filter teachers by Availability
    const handleAvailability = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTeacherAvailability(event.target.value);
        // setMaxPrice(parseInt(event.target.value));
    };

    // remove Availability filter
    const removeAvailability = () => {
        setTeacherAvailability("")
    };


    // remove Birth Country filter
    const removeBirthCountry = () => {
        console.log('no filter?')
        setTeacherBirthCountry("")
    };


    return (
        <>
            {/* filter the results by language */}
            <SearchLanguage inputText={inputText} setInputText={setInputText} filteredTeachers={filteredTeachers} />

            <div className={PriceFilterStyles.alignPrice}>
                <span>Max price: {maxPrice}</span>
                <div className={PriceFilterStyles.resetPrice} onClick={removePriceFilter}>
                    <svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={PriceFilterStyles.resetPriceCross}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg>
                </div>
                {/* filter teachers by price */}
                <input type="range" id="priceRange" name="priceRange" min="0" max="50" step="5" value={maxPrice} onChange={handlePriceChange} className={PriceFilterStyles.priceSlider} />
            </div>


            {/* filter teachers by birth country */}
            <span>COUNTRY OF BIRTH</span>
            <div className={PriceFilterStyles.resetPrice} onClick={removeBirthCountry}>
                <svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={PriceFilterStyles.resetPriceCross}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg>
            </div>
            <input type="text" id="teacherBirth" name="teacherBirth" value={teacherBirthCountry} onChange={handleBirthCountry} />


            {/* filter teachers by availability */}
            <div className="availability-flex">
                <span>I'M AVAILABLE</span>
                <div className={PriceFilterStyles.resetPrice} onClick={removeAvailability}>
                    <svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={PriceFilterStyles.resetPriceCross}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg>
                </div>
                <input type="text" id="teacherAvailability" name="teacherAvailability" value={teacherAvailability} onChange={handleAvailability} />
            </div>


            {filteredTeachers.map((arrayItem) => {
                return (
                    <TeacherBorder key={arrayItem.id}>
                        <div className={TeacherStyles.teacher}>
                            <h2>{arrayItem.language}</h2>
                            <h3>{arrayItem.name}</h3>
                            <h4>Experience: {arrayItem.experience}</h4>
                            <h5>Country of birth: {arrayItem.country}</h5>
                            <h5>Availability {arrayItem.availability}</h5>
                            <h5 className={TeacherStyles.price}>Price: {arrayItem.price}</h5>
                        </div>
                    </TeacherBorder>
                );
            })}
        </>
    );
};

export default FilteredTeachers;