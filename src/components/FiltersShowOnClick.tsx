import React from 'react';
import FilterStyles from './FilterStyles.module.css';

interface IFiltersShowOnClick {
    isPriceRangeVisible: boolean;
    maxPrice: number;
    handlePriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBirthCountry: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setDaysAvailabile: (daysAvailabile: string) => void;
    isBirthCountryVisible: boolean;
    isAvailabilityVisible: boolean;
    timeAvailabile: string;
    daysAvailabile: string;
    teacherBirthCountry: string;
    morningAvailability: () => void;
    afternoonAvailability: () => void;
    eveningAvailability: () => void;
}

const FiltersShowOnClick: React.FC<IFiltersShowOnClick> = ({
    isPriceRangeVisible,
    teacherBirthCountry,
    maxPrice,
    handlePriceChange,
    handleBirthCountry,
    setDaysAvailabile,
    isBirthCountryVisible,
    isAvailabilityVisible,
    timeAvailabile,
    daysAvailabile,
    morningAvailability,
    afternoonAvailability,
    eveningAvailability
}) => {
    return (
        <div>
            <div className={`${FilterStyles.filter__options} ${FilterStyles.hover}`}>
                {/* filter teachers by price */}
                <div className={`${FilterStyles.filter__input} ${isPriceRangeVisible ? FilterStyles.visible : FilterStyles.hidden}`} >
                    <input type="range" id="priceRange" name="priceRange" min="0" max="50" step="5" value={maxPrice} onChange={handlePriceChange} className={`${FilterStyles.priceSlider}`} />
                    <div>£ {maxPrice}</div>
                </div>
                {/* filter teachers by birth country */}
                <div className={`${FilterStyles.filter__input} ${isBirthCountryVisible ? FilterStyles.visible : FilterStyles.hidden}`}>
                    <input type="text" style={{ padding: '9px 0', borderRadius: '10px', textAlign: 'center' }} id="teacherBirth" placeholder="Search Country" name="teacherBirth" value={teacherBirthCountry} onChange={handleBirthCountry} />
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
                            <div style={{ color: daysAvailabile === 'Mon' ? '#3bb3bd' : "" }} className={FilterStyles.availability__day} onClick={() => setDaysAvailabile("Mon")}>Mon</div>
                            <div style={{ color: daysAvailabile === 'Tue' ? '#3bb3bd' : "" }} className={FilterStyles.availability__day} onClick={() => setDaysAvailabile("Tue")}>Tues</div>
                            <div style={{ color: daysAvailabile === 'Wed' ? '#3bb3bd' : "" }} className={FilterStyles.availability__day} onClick={() => setDaysAvailabile("Wed")}>Wed</div>
                            <div style={{ color: daysAvailabile === 'Thu' ? '#3bb3bd' : "" }} className={FilterStyles.availability__day} onClick={() => setDaysAvailabile("Thu")}>Thu</div>
                            <div style={{ color: daysAvailabile === 'Fri' ? '#3bb3bd' : "" }} className={FilterStyles.availability__day} onClick={() => setDaysAvailabile("Fri")}>Fri</div>
                            <div style={{ color: daysAvailabile === 'Sat' ? '#3bb3bd' : "" }} className={FilterStyles.availability__day} onClick={() => setDaysAvailabile("Sat")}>Sat</div>
                            <div style={{ color: daysAvailabile === 'Sun' ? '#3bb3bd' : "" }} className={FilterStyles.availability__day} onClick={() => setDaysAvailabile("Sun")}>Sun</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiltersShowOnClick
