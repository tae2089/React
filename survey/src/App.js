import { React, useCallback, useState, createContext } from 'react';
import SelectBox from './components/module/SelectBox';
import View from './page/View';

export const Select = createContext('분석');
function App() {
    const [selectValue, setSelectValue] = useState('분석');
    const onChange = useCallback((event) => {
        setSelectValue(event.target.value);
    }, []);

    return (
        <div className='App'>
            <SelectBox onChange={onChange} />
            <Select.Provider value={selectValue}>
                <View />
            </Select.Provider>
        </div>
    );
}

export default App;
