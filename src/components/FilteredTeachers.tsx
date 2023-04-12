import React, { useState, useRef, useEffect } from 'react';
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
    const [isPriceRangeVisible, setIsPriceRangeVisible] = useState(false);
    const [isBirthCountryVisible, setIsBirthCountryVisible] = useState(false);
    const [isAvailabilityVisible, setIsAvailabilityVisible] = useState(false);
    const [grayedOut, setGrayedOut] = useState(false);


    // function is triggered when user clicks outside of the filters
    const filterRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            event.stopPropagation();
            if (filterRef.current && !filterRef.current.contains(event.target as HTMLElement)) {
                setGrayedOut(false);
                setIsBirthCountryVisible(false);
                setIsAvailabilityVisible(false);
                setIsPriceRangeVisible(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    // filter the results by language searched, price, birth country of teacher, and teacher availabilty 
    let filteredTeachers = TeacherArray.filter(
        (arrayMatched) =>
            arrayMatched.language.toLowerCase().indexOf(inputText.toString()) !== -1 &&
            arrayMatched.price < maxPrice && arrayMatched.country.toLowerCase().indexOf(teacherBirthCountry.toString()) !== -1 &&
            arrayMatched.availability.toLowerCase().indexOf(teacherAvailability.toString()) !== -1
    );


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


    // REMOVE FILTERS
    // remove Price filter
    const removePriceFilter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsPriceRangeVisible(false);
        setMaxPrice(50);
        e.stopPropagation();
    };
    // remove Birth Country filter
    const removeBirthCountry = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsBirthCountryVisible(false);
        setTeacherBirthCountry("")
        e.stopPropagation();
    };
    // remove Availability filter
    const removeAvailability = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsAvailabilityVisible(false);
        setTeacherAvailability("");
        e.stopPropagation();
    };


    // OPEN FILTERS WHEN CLICKED
    // Open price filter 
    const openPriceFilter = () => {
        setGrayedOut(true);
        setIsPriceRangeVisible(!isPriceRangeVisible);
        setIsBirthCountryVisible(false);
        setIsAvailabilityVisible(false);
    };
    // Open birth country filter 
    const openBirthCountryFilter = () => {
        setGrayedOut(true);
        setIsBirthCountryVisible(!isBirthCountryVisible);
        setIsAvailabilityVisible(false);
        setIsPriceRangeVisible(false);
    };
    // Open availability filter 
    const openAvailabilityFilter = () => {
        setGrayedOut(true);
        setIsAvailabilityVisible(!isAvailabilityVisible);
        setIsBirthCountryVisible(false);
        setIsPriceRangeVisible(false);
    };

    return (
        <>
            {/* filter the results by language  */}
            <SearchLanguage inputText={inputText} setInputText={setInputText} filteredTeachers={filteredTeachers} />

            <section id="filter__section" ref={filterRef}>
                <div className={`${PriceFilterStyles.filter__options} ${grayedOut ? PriceFilterStyles.filter__options__grayed : ''}`}>
                    {/* filter teachers by price */}
                    <div className={`${PriceFilterStyles.filter__padding} ${isPriceRangeVisible ? PriceFilterStyles.filter__padding__white : ''}`}>
                        <div className={PriceFilterStyles.flex__column} onClick={openPriceFilter}>
                            <span className={PriceFilterStyles.filter__type}>MAX LESSON PRICE</span>
                            <div className={PriceFilterStyles.flex__align}>
                                <span>£ {maxPrice}</span>
                                {maxPrice < 50 ? (
                                    <div className={PriceFilterStyles.resetPrice} onClick={removePriceFilter}>
                                        <svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={PriceFilterStyles.resetPriceCross}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg>
                                    </div>) : null
                                }
                            </div>
                        </div>
                    </div>
                    {/* filter teachers by birth country */}
                    <div className={`${PriceFilterStyles.filter__padding} ${isBirthCountryVisible ? PriceFilterStyles.filter__padding__white : ''}`}>
                        <div className={PriceFilterStyles.flex__column} style={{ borderLeft: '1px solid lightgray', borderRight: '1px solid lightgray' }} onClick={openBirthCountryFilter}>
                            <span className={PriceFilterStyles.filter__type}>COUNTRY OF BIRTH</span>
                            <div className={PriceFilterStyles.flex__align}>
                                <span>{teacherBirthCountry.length === 0 ? 'Any Country' : teacherBirthCountry}</span>
                                {teacherBirthCountry.length > 0 ? (
                                    <div className={PriceFilterStyles.resetPrice} onClick={removeBirthCountry}>
                                        <svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={PriceFilterStyles.resetPriceCross}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg>
                                    </div>) : null
                                }
                            </div>
                        </div>
                    </div>
                    {/* filter teachers by availability */}
                    <div className={`${PriceFilterStyles.filter__padding} ${isAvailabilityVisible ? PriceFilterStyles.filter__padding__white : ''}`}>
                        <div className={PriceFilterStyles.flex__column} onClick={openAvailabilityFilter}>
                            <span className={PriceFilterStyles.filter__type}>I'M AVAILABLE</span>
                            <div className={PriceFilterStyles.flex__align}>
                                <span>{teacherAvailability.length === 0 ? 'Any time' : teacherAvailability}</span>
                                {teacherAvailability.length > 0 ? (
                                    <div className={PriceFilterStyles.resetPrice} onClick={removeAvailability}>
                                        <svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={PriceFilterStyles.resetPriceCross}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg>
                                    </div>) : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${PriceFilterStyles.filter__options} ${PriceFilterStyles.hover}`}>
                    <div className={`${PriceFilterStyles.filter__input} ${isPriceRangeVisible ? PriceFilterStyles.visible : PriceFilterStyles.hidden}`} >
                        <input type="range" id="priceRange" name="priceRange" min="0" max="50" step="5" value={maxPrice} onChange={handlePriceChange} className={`${PriceFilterStyles.priceSlider}`} />
                    </div>
                    <div className={`${PriceFilterStyles.filter__input} ${isBirthCountryVisible ? PriceFilterStyles.visible : PriceFilterStyles.hidden}`}>
                        <input type="text" id="teacherBirth" placeholder="Search Country" name="teacherBirth" value={teacherBirthCountry} onChange={handleBirthCountry} />
                    </div>
                    <div className={`${PriceFilterStyles.filter__input} ${isAvailabilityVisible ? PriceFilterStyles.visible : PriceFilterStyles.hidden}`}>
                        <input type="text" id="teacherAvailability" name="teacherAvailability" value={teacherAvailability} onChange={handleAvailability} />
                    </div>
                </div>
            </section>

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