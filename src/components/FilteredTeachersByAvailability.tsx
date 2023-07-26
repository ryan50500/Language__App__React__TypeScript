import React from 'react';
import FilterStyles from './FilterStyles.module.css';

interface IFilteredTeachersByAvailability {
    isAvailabilityVisible: Boolean;
    openAvailabilityFilter: () => void;
    timeAvailable: string;
    removeTimeAvailability: () => void;
    daysAvailable: string;
    removeDaysAvailability: () => void;
}

const FilteredTeachersByAvailability = ({ isAvailabilityVisible, openAvailabilityFilter, timeAvailable, removeTimeAvailability, daysAvailable, removeDaysAvailability }: IFilteredTeachersByAvailability) => {
    return (
        <div>
            <div className={`${FilterStyles.filter__padding} ${isAvailabilityVisible ? FilterStyles.filter__padding__white : ''}`}>
                <div className={FilterStyles.flex__column} onClick={openAvailabilityFilter}>
                    <span className={FilterStyles.filter__type}>I'M AVAILABLE</span>
                    <div className={FilterStyles.flex__align}>
                        {/* filter by time */}
                        {timeAvailable.length === 0 ? <span>Any time</span> : <span style={{ textTransform: 'capitalize' }}>{timeAvailable}</span>}
                        {timeAvailable.length > 0 ? (
                            <div className={FilterStyles.resetPrice} onClick={removeTimeAvailability}>
                                <svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={FilterStyles.resetPriceCross}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg>
                            </div>) : null
                        }
                        {/* filter by days */}
                        <span style={{ paddingLeft: '15px' }}>{daysAvailable}</span>
                        {daysAvailable.length > 0 ? (
                            <div className={FilterStyles.resetPrice} onClick={removeDaysAvailability}>
                                <svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={FilterStyles.resetPriceCross}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg>
                            </div>) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilteredTeachersByAvailability
