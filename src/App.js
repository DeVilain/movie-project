import React, { Fragment } from 'react';

// import router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import css
import './sass/css/style.css';
import './App.css';

// import pages
import TrangChu from './pages/TrangChu/TrangChu';
import Signin from './pages/Sign-in/Signin';
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
import SignupPage from './pages/Sign-up/SignupPage';
import DatVe from './components/DatVe/DatVe';


function App() {
    return ( 
        <Fragment>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={TrangChu}></Route>
                    <Route exact path="/signin" component={Signin}></Route>
                    <Route exact path="/signup" component={SignupPage}></Route>
                    <Route exact path="/chitietphim/:maPhim" component={ChiTietPhim}></Route>
                    <Route exact path="/datve/:maLichChieu" component={DatVe}></Route>
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;