import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../css/Header.css';
const Div = styled.div`
    /* margin-top: 10px; */
    display: flex;
    margin-bottom: 10px;
`;

const Box = styled.div`
    border: 1px solid white;
    padding-top: 20px;
    text-align: center;
    width: 35%;
    height: 50px;
    font-size: 20px;
    background-color: skyblue;
`;

const Header = () => {
    return (
        <Div>
            <Box>
                <Link className='text' to='/'>
                    설문지 참여
                </Link>
            </Box>
            <Box>
                <Link className='text' to='/allow'>
                    합격자 관리
                </Link>
            </Box>
            <Box>
                <Link className='text' to='/cancle'>
                    탈락자 관리
                </Link>
            </Box>
        </Div>
    );
};

export default Header;
