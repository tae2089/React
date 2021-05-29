import React from 'react';
import 'component/css/ShowBox.css';
const ShowBox = ({ question, answer }) => {
    return (
        <div className='test'>
            <div className='box'>
                <div className='left'>
                    <h2>{question}</h2>
                </div>
                <div className='content'>{answer}</div>
            </div>
        </div>
    );
};

export default ShowBox;
