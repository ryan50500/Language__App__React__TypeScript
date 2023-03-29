import React from 'react';
import styles from './TeacherBorder.module.css';

interface IUserBorder {
    children?: React.ReactNode
}

const TeacherBorder: React.FC<IUserBorder> = (props) => {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    )
}

export default TeacherBorder

