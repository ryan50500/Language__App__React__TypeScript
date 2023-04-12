import React, { useState, useRef, useEffect } from 'react';
import TeacherArray from '../TeacherArray';
import TeacherBorder from './TeacherBorder';
import SearchLanguage from './SearchLanguage';
import FilterStyles from './FilterStyles.module.css';


interface Props {
    initialInputText: string | number;
}

const FilteredTeachers: React.FC<Props> = ({ initialInputText }) => {
    const [inputText, setInputText] = useState<string | number>(initialInputText);
    const [maxPrice, setMaxPrice] = useState<number>(50);
    const [teacherBirthCountry, setTeacherBirthCountry] = useState<string>("");
    const [timeAvailabile, setTimeAvailabile] = useState<string>("");
    const [daysAvailabile, setDaysAvailabile] = useState<string>("");
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
            arrayMatched.time.toLowerCase().indexOf(timeAvailabile.toString()) !== -1 &&
            // arrayMatched.days.includes(daysAvailabile + " ")
            arrayMatched.days.indexOf(daysAvailabile + " ") > -1
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
    // filter teachers by morning availability
    const morningAvailability = () => {
        setTimeAvailabile('morning');
    };
    // filter teachers by afternoon availability
    const afternoonAvailability = () => {
        setTimeAvailabile('afternoon');
    };
    // filter teachers by evening availability
    const eveningAvailability = () => {
        setTimeAvailabile('evening');
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
        setTimeAvailabile("");
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
            {/* filter the search results by language  */}
            <SearchLanguage inputText={inputText} setInputText={setInputText} filteredTeachers={filteredTeachers} />

            {/* other filters */}
            <section id="filter__section" ref={filterRef}>
                <div className={`${FilterStyles.filter__options} ${grayedOut ? FilterStyles.filter__options__grayed : ''}`}>
                    {/* filter teachers by price */}
                    <div className={`${FilterStyles.filter__padding} ${isPriceRangeVisible ? FilterStyles.filter__padding__white : ''}`}>
                        <div className={FilterStyles.flex__column} onClick={openPriceFilter}>
                            <span className={FilterStyles.filter__type}>MAX LESSON PRICE</span>
                            <div className={FilterStyles.flex__align}>
                                <span>£ {maxPrice}</span>
                                {maxPrice < 50 ? (
                                    <div className={FilterStyles.resetPrice} onClick={removePriceFilter}>
                                        <svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={FilterStyles.resetPriceCross}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg>
                                    </div>) : null
                                }
                            </div>
                        </div>
                    </div>
                    {/* filter teachers by birth country */}
                    <div className={`${FilterStyles.filter__padding} ${isBirthCountryVisible ? FilterStyles.filter__padding__white : ''}`}>
                        <div className={FilterStyles.flex__column} style={{ borderLeft: '1px solid lightgray', borderRight: '1px solid lightgray' }} onClick={openBirthCountryFilter}>
                            <span className={FilterStyles.filter__type}>COUNTRY OF BIRTH</span>
                            <div className={FilterStyles.flex__align}>
                                {teacherBirthCountry.length === 0 ? <span>Any Country</span> : <span style={{ textTransform: 'capitalize' }}>{teacherBirthCountry}</span>}
                                {teacherBirthCountry.length > 0 ? (
                                    <div className={FilterStyles.resetPrice} onClick={removeBirthCountry}>
                                        <svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={FilterStyles.resetPriceCross}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg>
                                    </div>) : null
                                }
                            </div>
                        </div>
                    </div>
                    {/* filter teachers by availability */}
                    <div className={`${FilterStyles.filter__padding} ${isAvailabilityVisible ? FilterStyles.filter__padding__white : ''}`}>
                        <div className={FilterStyles.flex__column} onClick={openAvailabilityFilter}>
                            <span className={FilterStyles.filter__type}>I'M AVAILABLE</span>
                            <div className={FilterStyles.flex__align}>
                                {timeAvailabile.length === 0 ? <span>Any time</span> : <span style={{ textTransform: 'capitalize' }}>{timeAvailabile}</span>}
                                {timeAvailabile.length > 0 ? (
                                    <div className={FilterStyles.resetPrice} onClick={removeAvailability}>
                                        <svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={FilterStyles.resetPriceCross}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg>
                                    </div>) : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* filters open up when clicked*/}
                <div className={`${FilterStyles.filter__options} ${FilterStyles.hover}`}>
                    {/* filter teachers by price */}
                    <div className={`${FilterStyles.filter__input} ${isPriceRangeVisible ? FilterStyles.visible : FilterStyles.hidden}`} >
                        <input type="range" id="priceRange" name="priceRange" min="0" max="50" step="5" value={maxPrice} onChange={handlePriceChange} className={`${FilterStyles.priceSlider}`} />
                    </div>
                    {/* filter teachers by birth country */}
                    <div className={`${FilterStyles.filter__input} ${isBirthCountryVisible ? FilterStyles.visible : FilterStyles.hidden}`}>
                        <input type="text" id="teacherBirth" placeholder="Search Country" name="teacherBirth" value={teacherBirthCountry} onChange={handleBirthCountry} />
                    </div>
                    {/* filter teachers by availability */}
                    <div className={`${FilterStyles.filter__input__availability} ${isAvailabilityVisible ? FilterStyles.visible : FilterStyles.hidden}`}>
                        <input type="text" id="teacherAvailability" name="teacherAvailability" style={{ width: '167px', display: 'none' }} />
                        <div className={`${FilterStyles.availability__options} ${FilterStyles.availability__popout}`}>
                            <h3>Time of the day, in your time zone</h3>
                            <div className={FilterStyles.availability__flex}>
                                <div style={{ color: timeAvailabile === 'morning' ? '#3bb3bd' : "" }} className={FilterStyles.availability__time} onClick={morningAvailability}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sunrise"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>
                                    <span style={{ margin: '5px' }} >6-12</span>
                                    Morning
                                </div>
                                <div style={{ color: timeAvailabile === 'afternoon' ? '#3bb3bd' : "" }} className={FilterStyles.availability__time} onClick={afternoonAvailability}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                    <span style={{ margin: '5px' }} >12-5</span>
                                    Afternoon
                                </div>
                                <div style={{ color: timeAvailabile === 'evening' ? '#3bb3bd' : "" }} className={FilterStyles.availability__time} onClick={eveningAvailability}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                    <span style={{ margin: '5px' }} >5-10</span>
                                    Evening
                                </div>
                            </div>
                            <h3 style={{ margin: '15px 0' }}>Days of the week</h3>
                            <div className={FilterStyles.availability__flex}>
                                <div className={FilterStyles.availability__day}>Mon</div>
                                <div className={FilterStyles.availability__day}>Tues</div>
                                <div className={FilterStyles.availability__day}>Wed</div>
                                <div className={FilterStyles.availability__day}>Thu</div>
                                <div className={FilterStyles.availability__day}>Fri</div>
                                <div className={FilterStyles.availability__day}>Sat</div>
                                <div className={FilterStyles.availability__day}>Sun</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {filteredTeachers.map((arrayItem) => {
                return (
                    <TeacherBorder key={arrayItem.id}>
                        <div className={FilterStyles.teacher}>
                            <h2>{arrayItem.language}</h2>
                            <h3>{arrayItem.name}</h3>
                            <h4>Experience: {arrayItem.experience}</h4>
                            <h5>Country of birth: {arrayItem.country}</h5>
                            <h5>Time availabile: {arrayItem.time}</h5>
                            <h5>Days availabile: {arrayItem.days}</h5>
                            <h5 className={FilterStyles.price}>Price: £ {arrayItem.price}</h5>
                        </div>
                    </TeacherBorder>
                );
            })}
        </>
    );
};

export default FilteredTeachers;