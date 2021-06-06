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

let a = [];
const View = () => {
    const [selectValue, setSelectValue] = useState(0);
    const [users, setUsers] = useState([]);
    const [useSelect, setUseSelect] = useState(false);
    const [selectIdx, setSelectIdx] = useState(0);
    const getUsers = async (event) => {
        try {
            console.log('test start');
            const response = await axios.get('/survey/user', {
                params: {
                    section: event.target.value,
                    issuccess: 0,
                },
            });
            const data = response.data;
            console.log(data);
            setUseSelect((value) => true);
            setUsers((users) => data);
            a = data;
            console.log('test end');
        } catch (e) {
            console.log(e);
        }
    };

    const getUser = useCallback((event) => {
        console.log(event.target.selectedIndex);
        setSelectIdx(() => event.target.selectedIndex);
        setSelectValue((value) => event.target.value);
    }, []);

    const Success = useCallback(() => {
        console.log(selectIdx);
        setSelectValue(() => users[selectIdx].id);
        setSelectIdx((idx) => idx + 1);
    }, [selectIdx, users]);

    const fail = useCallback(() => {
        console.log(selectIdx);
        setSelectValue(() => users[selectIdx - 2].id);
        setSelectIdx((idx) => idx - 1);
    }, [selectIdx, users]);

    return (
        <div>
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
