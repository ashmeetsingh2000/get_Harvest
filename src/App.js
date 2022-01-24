import './App.css';
import { Route, Switch } from 'react-router-dom'
import HarvestHome from './Pages/harvest_Home';
import Whyharvest from './Pages/why_harvest';
import Features from './Pages/features';
import customers from './Pages/customers';
import Integration from './Pages/integration';
import Pricing from './Pages/pricing';
import tryHarvestFree from './Pages/try-harvest-free';
import pageNotFound from './Pages/pageNotFound';
import NavBar from './Navigation/Navbar';
import signIn from './Signup/signIn';
import Footer from './Footer/Footer';
import { usePathname } from './Constatnts/UsepathName';

function App() {
    const presentPath = usePathname()
    return (
        <>
            {presentPath === "/signin" || presentPath === "/tryHarvestFree" ? <></> : <NavBar />}

            <Switch>
                <Route exact path='/harvestHome' component={HarvestHome} />
                <Route exact path='/' component={Whyharvest} />
                <Route exact path='/features' component={Features} />
                <Route exact path='/customers' component={customers} />
                <Route exact path='/integration' component={Integration} />
                <Route exact path='/pricing' component={Pricing} />
                <Route exact path='/signin' component={signIn} />
                <Route exact path='/tryHarvestFree' component={tryHarvestFree} />
                <Route component={pageNotFound} />
            </Switch>

            {presentPath === "/signin" || presentPath === "/tryHarvestFree" ? null : <Footer />}

        </>
    );
}

export default App;
