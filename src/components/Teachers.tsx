import React from 'react';
import TeacherArray from '../TeacherArray';
import TeacherBorder from './TeacherBorder';
import { useState } from 'react';
import TeacherStyles from './TeacherStyles.module.css';

const Teachers = () => {
    const [inputText, setInputText] = useState<string>("polish");

    const filteredTeachers = TeacherArray.filter(arrayMatched => arrayMatched.language.toLowerCase().indexOf(inputText) !== -1)

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "1.2rem" }}>Which language do you want to learn?</p>
                <input type="text" name="name" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                {filteredTeachers.length === 0 ?
                    <div style={{ margin: "1.2rem" }}>Sorry, we currently don't offer that language...</div>
                    : ""}
            </div>
            {filteredTeachers.map((arrayItem) => {
                return (
                    <TeacherBorder key={arrayItem.id}>
                        <div className={TeacherStyles.teacher}>
                            <h2>{arrayItem.language}</h2>
                            <h3>{arrayItem.name}</h3>
                            <h4>Experience: {arrayItem.experience}</h4>
                            <h5>Country of birth: {arrayItem.country}</h5>
                            <h5 className={TeacherStyles.price}>Price: {arrayItem.price}</h5>
                        </div>
                    </TeacherBorder>
                )
            })}
        </>
    )
}

export default Teachers