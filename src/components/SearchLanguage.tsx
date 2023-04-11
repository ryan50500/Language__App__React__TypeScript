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
                <input type="text" name="name" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                {filteredTeachers.length === 0 ?
                    <div style={{ margin: "1.2rem" }}>Sorry, we currently don't offer that language...</div>
                    : ""
                }
            </div>
        </>
    )
}

export default SearchLanguage