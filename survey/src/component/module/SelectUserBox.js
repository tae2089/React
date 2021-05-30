import React from 'react';
import styled from 'styled-components';
const Select = styled.select`
    width: 100px;
    height: 35px;
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 14px;
    border: none;
    margin-left: 10px;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;

const Div = styled.div`
    display: flex;
`;

const SelectUserBox = ({ users, onChange, value }) => {
    return (
        <Div>
            <Select onChange={onChange} value={value}>
                <option value='없음'>선택하기</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </Select>
        </Div>
    );
};

export default SelectUserBox;
