import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom"
// import { getVenues } from "../../store/venues"
import { getOneVenue } from "../../store/venues"
import { setReservation } from "../../store/reservations"
import Reviews from "../../store/reviews"
import { getReviews } from "../../store/reviews"

import "./SingleVenue.css"

const SingleVenue = () => {
  const { id } = useParams();         //grabbing id of venue
  const [date, setDate] = useState("")

  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getReviews(id));
    dispatch(getOneVenue(id))
  }, [dispatch, id])

  const venue = useSelector(state => {    //grabs the state's venue at key of id
    return state.venue[id];
  })

  const userId = useSelector(state => {   //grabbing user ID
    return state.session.user?.id
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (date) {
      dispatch(setReservation(userId, id, date))
      history.push("/")
    } else {
      window.alert("Please select a date")
    }
  }


  let sessionLinks;
  if (sessionUser) {            //renders a button for booking IF the user is logged in
    sessionLinks = (
      <div>
        <input type="date" onChange={(e) => setDate(e.target.value)} value={date}></input>
        <button onClick={(e) => handleSubmit(e)}>Book It!</button>
      </div >
    )
  }


  if (!venue) return null;

  return (

    <>
      <div className="single-venue-div">
        {console.log(venue, '++++++++++++ venueIdPage')};
        <h2>{venue.name}</h2>
        <ul>
          <li>{venue.address}</li>
          <li>{venue.state}</li>
          <li>{venue.city}</li>
          <li>{venue.address}</li>
          <li>{venue.description}</li>
          <li>Open: {venue.openHours} to {venue.closeHours}</li>
          <li>Price per hour: {venue.cost}</li>
        </ul>
        <img className="venue-list-picture" src={venue.bookingImgUrl} alt="Error!" />
        <Reviews />
        {sessionLinks}
      </div>
    </>

  )

}

export default SingleVenue;
