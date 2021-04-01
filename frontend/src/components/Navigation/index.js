import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
// import { getSearch } from "../../store/search"
// import { getVenues } from "../../store/venues"
import SearchBar from "../searchBar"
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  // const dispatch = useDispatch()     //test for rendering. check redux dev tools and state

  // useEffect(() => {
  //   dispatch(getVenues())

  // }, [dispatch])

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

        <div>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/venues">Venues</NavLink>
          <SearchBar />
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
    </ul>
  );
}

export default Navigation;
