import React from 'react';
import styles from './NoResultsFound.module.css';

interface IFilteredTeachers {
    language: string;
    flag: string;
    native: boolean;
    name: string;
    experience: string;
    country: string;
    price: number;
    time: string;
    days: string[];
    id: number;
}

const NoResultsFound: React.FC<{ filteredTeachers: IFilteredTeachers[] }> = ({ filteredTeachers }) => {
    return (
        <>
            <div className={styles.no__results} style={{ display: 'flex', visibility: filteredTeachers.length === 0 ? 'visible' : 'hidden' }}>
                <div style={{ backgroundColor: 'red', borderRadius: '50%', padding: '12px', marginRight: '10px' }}>
                    <svg style={{ top: '2px', left: '1px', position: 'relative' }} xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="white" viewBox="0 0 15 16"><path fill="#FFFFFF" fillRule="evenodd" d="M6.5.642a6.5 6.5 0 0 1 5.249 10.335l2.958 2.958-1.414 1.415-2.958-2.959A6.5 6.5 0 1 1 6.5.642Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" clipRule="evenodd"></path></svg>
                </div>
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <p style={{ fontSize: '20px', letterSpacing: '0.5px' }}>Sorry, no teachers found...</p>
                    <p style={{ fontSize: '15px', color: "#6f757b", marginTop: '5px' }}>For more results, please make sure to change your filters</p>
                </div>
            </div>
        </>
    )
}

export default NoResultsFound

