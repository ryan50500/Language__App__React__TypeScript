import React from 'react';
import FilterStyles from './FilterStyles.module.css';

interface IFilteredTeachersByBirthCountry {
    isBirthCountryVisible: Boolean;
    openBirthCountryFilter: () => void;
    teacherBirthCountry: string;
    removeBirthCountry: () => void;
}

const FilteredTeachersByBirthCountry = ({ isBirthCountryVisible, openBirthCountryFilter, teacherBirthCountry, removeBirthCountry }: IFilteredTeachersByBirthCountry) => {
    return (
        <div>
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
        </div>
    )
}

export default FilteredTeachersByBirthCountry
