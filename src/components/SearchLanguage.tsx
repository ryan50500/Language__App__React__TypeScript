import React from 'react';
import { useState } from 'react'
import TeacherArray from '../TeacherArray';


interface ISearchLanguage {
    inputText: string | number,
    setInputText: React.Dispatch<React.SetStateAction<string | number>>
    filteredTeachers: any[]
}


const SearchLanguage = ({ inputText, setInputText, filteredTeachers }: ISearchLanguage) => {
    return (
        <>
            <div style={{ textAlign: "center" }} >
                <p style={{ fontSize: "1.3rem", margin: "1rem" }}>Which language do you want to learn?</p>
                <input style={{ padding: '10px 15px', borderRadius: '10px', textAlign: 'center' }} placeholder="Search language" type="text" name="name" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            </div>
        </>
    )
}

export default SearchLanguage