import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom"
import { getOneVenue } from "../../store/venues"
import { setReservation } from "../../store/reservations"

import "./SingleVenue.css"

const SingleVenue = () => {
  const { id } = useParams();         //grabbing id of venue
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getOneVenue(id));
  })

  const venue = useSelector(state => {
    return state.venue[id];
  })

  const userId = useSelector(state => {   //grabbing user ID
    return state.session.user.id
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setReservation(userId, id))
    history.push("/")
  }

  let sessionLinks;
  if (sessionUser) {            //renders a button for booking IF the user is logged in
    sessionLinks = (
      <>
        <button onClick={(e) => handleSubmit(e)}>Book It!</button>
      </>
    )
  }


  return (

    <>
      <div className='venueId'>
        {console.log(venue, '++++++++++++ venueIdPage')};
        <h2>{venue.name}</h2>
        <ul>
          <li>{venue.address}</li>
          <li>{venue.state}</li>
          <li>{venue.city}</li>
          <li>{venue.address}</li>
          <li>{venue.description}</li>
          <li>Open: {venue.state} to {venue.closeHours}</li>
          <li>Price per hour: {venue.cost}</li>
        </ul>
        <img className="venue-pic" src={venue.bookingImgUrl} alt="Error!" />
        {sessionLinks}
      </div>
    </>

  )

}

export default SingleVenue;
