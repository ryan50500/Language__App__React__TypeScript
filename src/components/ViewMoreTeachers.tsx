import React from 'react'
import styles from './ViewMoreTeachers.module.css';

type ViewMoreTeachersProps = {
    handleViewMoreTeachers: () => void;
};

const ViewMoreTeachers: React.FC<ViewMoreTeachersProps> = ({ handleViewMoreTeachers }) => {
    return (
        <button className={styles.view__more} onClick={handleViewMoreTeachers}>View more teachers</button>
    )
}

export default ViewMoreTeachers

