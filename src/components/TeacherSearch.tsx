import React from 'react';
import { useState } from 'react'
import TeacherArray from '../TeacherArray';


interface ITeacherSearch {
    inputText: string,
    setInputText: (inputText: string) => void;
    filteredTeachers: any[]
}


const TeacherSearch = ({ inputText, setInputText, filteredTeachers }: ITeacherSearch) => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "1.2rem" }}>Which language do you want to learn?</p>
                <input type="text" name="name" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                {filteredTeachers.length === 0 ?
                    <div style={{ margin: "1.2rem" }}>Sorry, we currently don't offer that language...</div>
                    : ""
                }
            </div>
        </>
    )
}

export default TeacherSearch