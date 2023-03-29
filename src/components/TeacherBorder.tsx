import React from 'react';
import styles from './TeacherBorder.module.css';

interface ITeacherBorder {
    children?: React.ReactNode
}

const TeacherBorder: React.FC<ITeacherBorder> = (props) => {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    )
}

export default TeacherBorder

