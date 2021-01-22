import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from "react-router-dom";

import Profil from "./components/Profil/Profil";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import AgenceSignUp from "./components/Signup/AgenceSignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import UserPosts from "./components/UserPosts/UserPosts";
import "./App.css";
import OtherPosts from "./components/OtherPosts/OtherPosts";
import AgenceSignin from "./components/Signin/AgenceSignin";
import ProfilAgence from "./components/Profil/ProfilAgence";
import AgenceOffres from "./components/AgenceOffres/AgenceOffres";
import AllUsers from "./components/Admin/AllUsers";
import AllAgences from "./components/Admin/AllAgences";
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import { logout } from "./js/actions";
import UserAgences from "./components/UserAgences/UserAgences";
import UserOffres from "./components/UserOffres/UserOffres";
import OneAgenceOffres from "./components/OneAgenceOffres/OneAgenceOffres";
import Alert from "./components/Spinner/Alert";
import SigninForm from "./components/SigninForm/SigninForm";
import { setAlert } from "./js/actions/Alert";


function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user);
  useEffect(() => {
    if (user !== null) {
      if (user.isBanned === true) {
        { dispatch(logout()) };
        {<Redirect to="/" />}
        dispatch(setAlert("your account got banned !Please contact admin "));
      }
    }
  }, [user]);
  return (
    <Router>
      <Route exact path="/" component={Dashboard} /> 
      <section>
        <Alert />
      <Switch>
        <Route exact path="/registeruser" component={Signup} />
        <Route exact path="/loginuser" component={Signin} />
        <Route exact path="/profil" component={Profil} />
        <Route exact path="/profiluser/posts" component={UserPosts} /> 
        <Route exact path="/profiluser/posts/all" component={OtherPosts} />
        <Route exact path="/registeragence" component = {AgenceSignUp} />
        <Route exact path="/loginagence" component={AgenceSignin} />
        <Route exact path="/profilagence" component={ProfilAgence} />
        <Route exact path="/profilagence/offres" component={AgenceOffres} />
        <Route exact path="/admin/allUsers" component={AllUsers} />
        <Route exact path="/admin/allAgences" component={AllAgences} />
        <Route exact path="/profiluser/agences" component={UserAgences} />
        <Route exact path="/profiluser/offres" component={UserOffres} />
        <Route exact path="/profiluser/agences/offres/:id" component={OneAgenceOffres} />
        <Route exact path="/test" component={SigninForm} />
      </Switch>
      </section>
    </Router>
  );
}

export default App;
