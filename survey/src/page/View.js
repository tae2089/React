import { React, useCallback, useState, createContext, useRef } from 'react';
import SelectBox from '../component/module/SelectSectionBox';
import IntroduceContent from '../component/layout/IntroduceContent';
import axios from 'axios';
import SelectUserBox from '../component/module/SelectUserBox';
import styled from 'styled-components';
import Header from '../component/layout/Header';
import Footer from '../component/layout/Footer';
import Allow from '../component/module/Allow';
export const Select = createContext('분석');
const Div = styled.div`
    display: flex;
`;
const View = () => {
    const [selectValue, setSelectValue] = useState(0);
    const [users, setUsers] = useState([]);
    const selectId = useRef();
    const getUsers = async () => {
        console.log('test start');
        try {
            const response = await axios.get('/user');
            const data = response.data;
            console.log(data);
            setUsers(data.users);
            console.log('test end');
        } catch (e) {
            console.log(e);
        }
    };

    const getUser = useCallback((event) => {
        console.log(event.target.value);
        setSelectValue(event.target.value);
    }, []);

    const Success = useCallback(() => {
        setSelectValue((value) => value * 1 + 1);
    }, []);

    const fail = useCallback(() => {
        setSelectValue((value) => value * 1 - 1);
    }, []);

    return (
        <div>
            <Header />
            <Div>
                <SelectBox onChange={getUsers} />
                <SelectUserBox
                    users={users}
                    onChange={getUser}
                    value={selectValue}
                />
            </Div>
            <Select.Provider value={selectValue}>
                <IntroduceContent />
            </Select.Provider>
            <Allow onSuccess={Success} onFailure={fail} />
            <Footer />
        </div>
    );
};

export default View;
