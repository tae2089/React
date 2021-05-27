import React from 'react';

const SelectBox = ({ onChange }) => {
    return (
        <div>
            <select name='selectSurvey' id='selectSurvey' onChange={onChange}>
                <option value='분석'>분석</option>
                <option value='시각화'>시각화</option>
                <option value='엔지니어링'>엔지니어링</option>
            </select>
        </div>
    );
};

export default SelectBox;
