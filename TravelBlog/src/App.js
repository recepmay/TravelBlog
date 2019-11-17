import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/MainPage/MainPage';
import PostDetails from './Components/PostDetails/PostDetails';
import PostCreationPanel from './Components/PostCreationPanel/PostCreationPanel';
import Categories from './Components/Categories/Categories';

import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router';

import {
    getSelectedPostIdSlc
} from './redux/selectors';

import {
    postSelectedAct,
} from './redux/actions';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Banner/>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/details/:selectedPostId" component={PostDetails}/>
                        <Route exact path="/creation" component={PostCreationPanel}/>
                        <Route exact path="/categories" component={Categories}/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    getSelectedPostIdSlc: getSelectedPostIdSlc(state)
});
const mapDispatchToProps = {
    postSelectedAct
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
