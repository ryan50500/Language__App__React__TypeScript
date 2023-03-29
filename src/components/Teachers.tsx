import React from 'react';
import TeacherArray from '../TeacherArray';
import TeacherBorder from './TeacherBorder';
import TeacherSearch from './TeacherSearch';
import { useState } from 'react';
import TeacherStyles from './TeacherStyles.module.css';


const Teachers = () => {
    const [inputText, setInputText] = useState<string>("polish");
    const filteredTeachers = TeacherArray.filter(arrayMatched => arrayMatched.language.toLowerCase().indexOf(inputText) !== -1)
    console.log(filteredTeachers)
    return (
        <>
            <TeacherSearch inputText={inputText} setInputText={setInputText} filteredTeachers={filteredTeachers} />
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