import { React, useContext } from 'react';
import { Select } from '../App';

import Divider from '../components/module/Divider';
import Info from '../components/module/Info';
import ShowBox from '../components/module/ShowBox';

const View = () => {
    const username = useContext(Select);
    return (
        <div>
            <Info />
            <Divider />
            <ShowBox answer='임태빈' question='1. 이름' />
            <ShowBox answer='25' question='2. 나이' />
        </div>
    );
};

export default View;
