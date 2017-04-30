import React from 'react'
import PropTypes from 'prop-types'

// Redux
import { Provider } from 'react-redux'

// react router
// This particular use of history is to get around a bug.
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';

// Redux sore
import {store} from '../store/store';

//Components
import Index from '../components/index.jsx';
import VisibleItem from '../components/item-container';
import VisibleSection from '../components/section-container';
import Nav from '../components/nav.jsx';
import Footer from '../components/footer.jsx';

//This particular implementation was to get around a bug....
const history = syncHistoryWithStore(createBrowserHistory(), store)

const App = ({ store }) => {
    const state = {
            nav: {
                sections: [
                    {
                        id: 'womens',
                        title: 'Women\'s'
                    },
                    {
                        id: 'mens',
                        title: 'Men\'s'
                    },
                    {
                        id: 'home',
                        title: 'Home Furnishings'
                    }]
            }
        };

    return (
        <Provider store={store}>
            <Router history={history}>
                <div>
                    <header>
                        {/*need to switch this to use the store...*/}
                        {<Nav nav={state.nav} />}
                    </header>
                    <main>
                        {<Route exact path='/' component={Index} />}
                        {<Route path='/about' component={Index} />}
                        {<Route path='/contact' component={Index} />}
                        {<Route path='/section/:id' component={VisibleSection} />}
                        {<Route path='/item/:id' component={VisibleItem} />}
                    </main>
                    <Footer />
                </div>
            </Router>
        </Provider>)
};


App.propTypes = {
    /* eslint-disable react/forbid-prop-types  */
    /* It doesn't make any sense to define the shape of the store */
    store: PropTypes.object.isRequired
    /* eslint-enable */
};

export default App
