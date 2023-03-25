import React from 'react';
import UserArray from '../UserArray';
import { useState } from 'react';


const Users = () => {
    const [inputText, setInputText] = useState<string>("Polish");

    const filteredItem = UserArray.filter(arrayMatched => arrayMatched.language.toLowerCase().indexOf(inputText) !== -1)
    console.log(filteredItem);
    return (
        <>
            <p>Which language do you want to learn?</p>
            <input type="text" name="name" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            {filteredItem.map((arrayItem, index) => {
                return (
                    <div className="teacher" key={index}>
                        <h2>{arrayItem.language}</h2>
                        <h3>{arrayItem.name}</h3>
                        <h4>Experience: {arrayItem.experience}</h4>
                        <h5>Country of birth: {arrayItem.country}</h5>
                        <h5>Price: {arrayItem.price}</h5>
                    </div>

                )
            })}
        </>
    )
}

export default Users



