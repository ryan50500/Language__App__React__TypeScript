import React from 'react';
import UserArray from '../UserArray';

// to solve Users showing in red, we wrap whole Users component in jsx fragment <> </>

const Users = () => {
    return (
        <>
            {UserArray.map((arrayItem, index) => {
                return (

                    <div key={index}>
                        <h2>{arrayItem.language}</h2>
                    </div>

                )
            })}
        </>
    )
}

export default Users


