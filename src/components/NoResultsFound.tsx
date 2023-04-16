import React from 'react';

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
            <div style={{ margin: "15px", visibility: filteredTeachers.length === 0 ? 'visible' : 'hidden' }}>
                Sorry, no teachers found...
            </div>
        </>
    )
}

export default NoResultsFound

