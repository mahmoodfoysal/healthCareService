import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './components/Home/AboutUs/AboutUs';
import FAQ from './components/Home/FAQ/FAQ';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './components/Registration/Registration';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <PrivateRoute path="/serviceDetails/:id">
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/faq">
          <FAQ></FAQ>
        </Route>
        <Route path="/registration">
          <Registration></Registration>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
