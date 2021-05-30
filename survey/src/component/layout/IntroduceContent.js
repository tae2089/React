import { React, useContext, useEffect, useState } from 'react';

import { Select } from 'page/View';
import ShowBox from '../module/ShowBox';
import Divider from '../module/Divider';
import Info from '../module/Info';
import axios from 'axios';
import Allow from '../module/Allow';

const IntroduceContent = () => {
    // 세션 선택 불러오기
    const username = useContext(Select);

    const [info, setInfo] = useState({
        name: '',
        age: 0,
        school: '',
    });
    const getInfo = async () => {
        console.log('start getInfo');
        const uri = '/user/' + username;
        console.log(uri);
        try {
            const response = await axios.get(uri);
            const data = response.data;
            setInfo({
                name: data.name,
                age: data.age,
                school: data.school,
            });
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        console.log('test-----');
        if (username !== '') {
            console.log(username);
            getInfo();
        }
    }, [username]);
    return (
        <div>
            <Info name={info.name} age={info.age} school={info.school} />
            <Divider />
            <ShowBox answer='임태빈' question='1번 문항. 이름' />
            <ShowBox answer='25' question='2번 문항. 나이' />
            <ShowBox answer='25' question='2번 문항. 나이' />
            <ShowBox answer='25' question='2번 문항. 나이' />
        </div>
    );
};

export default IntroduceContent;
