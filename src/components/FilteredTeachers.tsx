import React, { useState, useReducer, useRef, useEffect } from 'react';
import { initialState, reducer } from './reducer';
import TeacherArray from '../TeacherArray';
import SearchLanguage from './SearchLanguage';
import NoResultsFound from './NoResultsFound';
import FilteredTeachersByPrice from './FilteredTeachersByPrice';
import FiltersShowOnClick from './FiltersShowOnClick';
import FilteredTeachersByBirthCountry from './FilteredTeachersByBirthCountry';
import FilteredTeachersByAvailability from './FilteredTeachersByAvailability';
import ViewMoreTeachers from './ViewMoreTeachers'
import FilterStyles from './FilterStyles.module.css';


const FilteredTeachers: React.FC = () => {
    const [inputText, setInputText] = useState<string | number>("");
    const [maxPrice, setMaxPrice] = useState<number>(50);
    const [teacherBirthCountry, setTeacherBirthCountry] = useState<string>("");
    const [timeAvailabile, setTimeAvailabile] = useState<string>("");
    const [daysAvailabile, setDaysAvailabile] = useState<string>('');
    const [isPriceRangeVisible, setIsPriceRangeVisible] = useState(false);
    const [isBirthCountryVisible, setIsBirthCountryVisible] = useState(false);
    const [isAvailabilityVisible, setIsAvailabilityVisible] = useState(false);
    const [grayedOut, setGrayedOut] = useState(false);
    // Flipped cards
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    // number of teachers to show at a time (currently set to 5)
    // const [displayedTeachers, setDisplayedTeachers] = useState(5);


    // REDUCER 
    const [state, dispatch] = useReducer(reducer, initialState);



    // hide the filters when user clicks outside of them
    const filterRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
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


    // Show filtered teachers 
    let filteredTeachers = TeacherArray.filter(
        (teacher) =>
            teacher.language.toLowerCase().indexOf(inputText.toString().toLowerCase()) !== -1 &&
            teacher.price < maxPrice && teacher.country.toLowerCase().indexOf(teacherBirthCountry.toString()) !== -1 &&
            teacher.time.toLowerCase().indexOf(timeAvailabile.toString()) !== -1 &&
            (daysAvailabile === '' || teacher.days.includes(daysAvailabile + " "))
    );




    // show more teaches when button is clicked
    // const handleViewMoreTeachers = () => {
    //     setDisplayedTeachers((prevDisplayedTeachers) => prevDisplayedTeachers + 5);
    // };
    const handleViewMoreTeachers = () => {
        dispatch({ type: 'SET_DISPLAYED_TEACHERS', payload: state.displayedTeachers + 5 });
    };






    // filter teachers by price
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
    const removePriceFilter = () => {
        setIsPriceRangeVisible(false);
        setMaxPrice(50);
    };
    // remove Birth Country filter
    const removeBirthCountry = () => {
        setIsBirthCountryVisible(false);
        setTeacherBirthCountry("")
    };
    // remove Time Availability filter
    const removeTimeAvailability = () => {
        setIsAvailabilityVisible(false);
        setTimeAvailabile("");
    };
    // remove Days Availability filter
    const removeDaysAvailability = () => {
        setDaysAvailabile("")
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


    // Handle flipped cards
    const handleFlipped = (id: number) => {
        setFlippedCards((prevFlippedCards) => {
            // if card IS ALREADY flipped (id already exists in the prevFlippedCards array)
            if (prevFlippedCards.includes(id)) {
                // returns a new array without the clicked card (basically "unflipping" it)
                return prevFlippedCards.filter((cardId) => cardId !== id);
                // if card is NOT flipped
            } else {
                // "flips" the card by adding its ID to the flippedCards array.
                return [...prevFlippedCards, id];
            }
        });
        console.log(flippedCards)
    };


    return (
        <>
            {/* filter by search input */}
            <SearchLanguage inputText={inputText} setInputText={setInputText} filteredTeachers={filteredTeachers} />
            <section id="filter__section" ref={filterRef}>
                <div className={`${FilterStyles.filter__options} ${grayedOut ? FilterStyles.filter__options__grayed : ''}`}>
                    {/* filter teachers by price */}
                    <FilteredTeachersByPrice
                        isPriceRangeVisible={isPriceRangeVisible}
                        openPriceFilter={openPriceFilter}
                        removePriceFilter={removePriceFilter}
                        maxPrice={maxPrice}
                    />
                    {/* filter teachers by birth country */}
                    <FilteredTeachersByBirthCountry
                        isBirthCountryVisible={isBirthCountryVisible}
                        openBirthCountryFilter={openBirthCountryFilter}
                        teacherBirthCountry={teacherBirthCountry}
                        removeBirthCountry={removeBirthCountry}
                    />
                    {/* filter teachers by availability */}
                    <FilteredTeachersByAvailability
                        isAvailabilityVisible={isAvailabilityVisible}
                        openAvailabilityFilter={openAvailabilityFilter}
                        timeAvailabile={timeAvailabile}
                        removeTimeAvailability={removeTimeAvailability}
                        daysAvailabile={daysAvailabile}
                        removeDaysAvailability={removeDaysAvailability}
                    />
                </div>
                {/* Open filters when clicked */}
                <FiltersShowOnClick
                    eveningAvailability={eveningAvailability}
                    teacherBirthCountry={teacherBirthCountry}
                    handleBirthCountry={handleBirthCountry}
                    isPriceRangeVisible={isPriceRangeVisible}
                    maxPrice={maxPrice}
                    handlePriceChange={handlePriceChange}
                    isBirthCountryVisible={isBirthCountryVisible}
                    isAvailabilityVisible={isAvailabilityVisible}
                    timeAvailabile={timeAvailabile}
                    daysAvailabile={daysAvailabile}
                    setDaysAvailabile={setDaysAvailabile}
                    morningAvailability={morningAvailability}
                    afternoonAvailability={afternoonAvailability}
                />
            </section>

            {/* No teacher found component */}
            <NoResultsFound filteredTeachers={filteredTeachers} />


            {filteredTeachers.slice(0, state.displayedTeachers).map((arrayItem) => {
                return (
                    // if 'flippedCards' array includes the card ID... add the 'flipped' class
                    <div key={arrayItem.id} className={`${FilterStyles.card} ${flippedCards.includes(arrayItem.id) ? FilterStyles.flipped : ''}`}>
                        {/* IF CARD IS FLIPPED show teacher contact info*/}
                        {flippedCards.includes(arrayItem.id) ? (
                            <div className={FilterStyles.teacher__info}>
                                <p>Email: Example123@gmail.com</p>
                                <p>SkypeID: live.nameexample_123</p>
                                <p>Website: www.teacher-courses.com</p>
                                <button className={FilterStyles.teacher__buttons} onClick={() => handleFlipped(arrayItem.id)}>Back to teacher</button>
                            </div>
                        ) :
                            <>
                                <div className={FilterStyles.teacher}>
                                    <h4 className={FilterStyles.teacher__name}>{arrayItem.name}<img style={{ paddingLeft: '10px', width: '34px' }} src={arrayItem.flag}></img></h4>
                                    <h4>Teaches: {arrayItem.language}
                                        {arrayItem.native ? (
                                            <span style={{ backgroundColor: '#daf2dc', color: '#007913', fontSize: '15px', marginLeft: '5px', padding: '5px 9px', borderRadius: '10px' }}>Native</span>
                                        ) : null}
                                    </h4>
                                    <h4>Experience: {arrayItem.experience}</h4>
                                    <h5>Country of birth: {arrayItem.country}</h5>
                                    <h5>Time availabile: {arrayItem.time}</h5>
                                    <h5>Days availabile: {arrayItem.days}</h5>
                                    <h5 className={FilterStyles.price}>Price: £{arrayItem.price} per hour</h5>
                                </div>
                                <div className={FilterStyles.teacher__contact}>
                                    <div className={FilterStyles.teacher__flex}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <svg style={{ fill: '#fdc425', height: '20px', width: '20px' }} viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg" className="styles_RatingStarIcon__i7Hk3"><path d="M23.97 8.721a.597.597 0 0 0-.507-.413l-7.744-.822-3.172-7.16c-.192-.435-.903-.435-1.095 0l-3.17 7.16-7.745.822a.601.601 0 0 0-.508.413.606.606 0 0 0 .17.635l5.785 5.248-1.616 7.667a.605.605 0 0 0 .586.729.595.595 0 0 0 .3-.081L12 19.003l6.747 3.916c.204.119.46.105.652-.035a.606.606 0 0 0 .234-.613l-1.616-7.668 5.786-5.248a.606.606 0 0 0 .168-.634z"></path></svg>
                                            <span style={{ fontSize: '20px', fontWeight: '100', paddingLeft: '5px' }}>{arrayItem.rating}</span>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: '20px', fontWeight: '100' }}>£{arrayItem.price}</span>
                                        </div>
                                    </div>
                                    <div className={FilterStyles.teacher__flex__baseline}>
                                        <div><span style={{ fontSize: '15px', fontWeight: '100' }}>{arrayItem.reviews}</span><span style={{ fontSize: '13.5px', color: 'gray', paddingLeft: '5px' }}>reviews</span></div>
                                        <span style={{ fontSize: '13.5px', color: 'gray' }}>1-hour lesson</span>
                                    </div>
                                    <button className={FilterStyles.teacher__buttons} onClick={() => handleFlipped(arrayItem.id)}>View contact info</button>
                                </div>
                            </>}
                    </div>
                );
            })}
            {/* only show 'View more teachers' button if there are more teachers in the filtered array that haven't been displayed yet. */}
            {filteredTeachers.length > state.displayedTeachers && (
                <ViewMoreTeachers handleViewMoreTeachers={handleViewMoreTeachers} />
            )}
        </>
    );
};

export default FilteredTeachers;