import { React } from 'react';
import View from 'page/View';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SuccessPage from './page/SuccessPage';
import FailurePage from './page/FailurePage';
import Header from "./component/layout/Header";

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={View} />
                    <Route path='/success' component={SuccessPage} />
                    <Route path='/fail' component={FailurePage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
