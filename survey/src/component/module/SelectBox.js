import React from 'react';

const SelectBox = ({ onChange }) => {
    return (
        <div>
            <select name='selectSurvey' id='selectSurvey' onChange={onChange}>
                <option value='0'>분석</option>
                <option value='1'>시각화</option>
                <option value='2'>엔지니어링</option>
            </select>
        </div>
    );
};

export default SelectBox;
