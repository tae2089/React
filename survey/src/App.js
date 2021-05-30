import { React } from 'react';
import View from 'page/View';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route exact path='/' component={View} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
