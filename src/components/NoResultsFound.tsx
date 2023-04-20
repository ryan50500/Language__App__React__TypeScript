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
                <div>
                    <span style={{ backgroundColor: 'red', borderRadius: '50%', padding: '10px', marginRight: '10px' }}>
                        <svg style={{ top: '3px', left: '1px', position: 'relative' }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 15 16"><path fill="#FFFFFF" fillRule="evenodd" d="M6.5.642a6.5 6.5 0 0 1 5.249 10.335l2.958 2.958-1.414 1.415-2.958-2.959A6.5 6.5 0 1 1 6.5.642Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" clipRule="evenodd"></path></svg>
                    </span>
                     Sorry, no teachers found... <span>For more results, please make sure to change your filters</span>
                </div>
                {/* <div style={{ display: 'block' }}>For more results, please make sure to change your filters</div> */}
            </div>
        </>
    )
}

export default NoResultsFound

