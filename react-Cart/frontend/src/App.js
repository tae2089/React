import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeScreen, CartScreen, ProductScreen } from './pages/index';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
    const [sideToggle, setSideToggle] = useState(false);

    const onClick = () => {
        setSideToggle(true);
    };
    const backToggle = () => {
        setSideToggle(false);
    };
    return (
        <Router>
            <div className='app'>
                <Navbar click={onClick} />
                <SideDrawer show={sideToggle} />
                <Backdrop show={sideToggle} click={backToggle} />
                {/* HomeScreen */}
                {/* ProductScreen */}
                {/* CartScreen */}
                <main>
                    <Switch>
                        <Route exact path='/' component={HomeScreen} />
                        <Route
                            exact
                            path='/product/:id'
                            component={ProductScreen}
                        />
                        <Route exact path='/cart' component={CartScreen} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
