import { React, useContext } from 'react';
import { Select } from '../App';

const View = () => {
    const username = useContext(Select);
    return (
        <div>
            1. 이름
            {username}
        </div>
    );
};

export default View;
