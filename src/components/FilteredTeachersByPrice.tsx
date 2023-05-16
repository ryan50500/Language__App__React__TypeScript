import React from 'react';
import FilterStyles from './FilterStyles.module.css';

interface IFilteredTeachersByPrice {
    isPriceRangeVisible: boolean,
    openPriceFilter: () => void;
    removePriceFilter: () => void;
    maxPrice: number
}


const FilteredTeachersByPrice = ({ isPriceRangeVisible, openPriceFilter, removePriceFilter, maxPrice }: IFilteredTeachersByPrice) => {
    return (
        <div>
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
        </div>
    )
}

export default FilteredTeachersByPrice
