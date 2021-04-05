import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
// import { getSearch } from "../../store/search"
// import { getVenues } from "../../store/venues"
import SearchBar from "../searchBar"
import './Navigation.css';

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user);

  // const dispatch = useDispatch()     //test for rendering. check redux dev tools and state

  // useEffect(() => {
  //   dispatch(getVenues())

  // }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const handleClick = () => {
    dispatch(sessionActions.demoLogin())
  }

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (

      <>

        <ProfileButton user={sessionUser} />
        <NavLink to="/venues">Venues</NavLink>

      </>
    );
  } else {
    sessionLinks = (
      <>

        <div className="demo-button">
          {/* <button onClick={handleSubmit}>Demo User!</button> */}
          <NavLink to="/" onClick={handleClick}>Demo User</NavLink>
        </div>
        <div className="login-link">
          <NavLink to="/login">Log In</NavLink>
        </div>

        <div className="signup-link">
          <NavLink to="/signup">Sign Up</NavLink>
        </div>

        <div className="venues-link">
          <NavLink to="/venues">Venues</NavLink>
        </div>

      </>
    );
  }

  return (
    <ul>

      <li>
        <NavLink exact to="/">AirTTG</NavLink>
        {isLoaded && sessionLinks}
      </li>
      <li>
        <SearchBar />
      </li>
    </ul>
  );
}

export default Navigation;
