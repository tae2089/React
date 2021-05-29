import { React, useCallback, useState, createContext } from 'react';
import SelectBox from '../component/module/SelectSectionBox';
import IntroduceContent from '../component/layout/IntroduceContent';
import axios from 'axios';
import SelectUserBox from '../component/module/SelectUserBox';
import styled from 'styled-components';
export const Select = createContext('분석');
const Div = styled.div`
    display: flex;
`;
const View = () => {
    const [selectValue, setSelectValue] = useState('');
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        console.log('test start');
        try {
            const response = await axios.get('/survey/user');
            const data = response.data;
            console.log(data);
            setUsers(data);
            console.log('test end');
        } catch (e) {
            console.log(e);
        }
    };

    const getUser = useCallback((event) => {
        console.log(event.target.value);
        setSelectValue(event.target.value);
    }, []);

    return (
        <div>
            <Div>
                <SelectBox onChange={getUsers} />
                <SelectUserBox users={users} onChange={getUser} />
            </Div>
            <Select.Provider value={selectValue}>
                <IntroduceContent />
            </Select.Provider>
        </div>
    );
};

export default View;
