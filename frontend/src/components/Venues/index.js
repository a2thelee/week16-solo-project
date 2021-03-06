import { getVenues } from "../../store/venues"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom"
import "./Venues.css"

function Venues() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVenues())
  }, [dispatch])

  const venues = useSelector(state => {     //grabs the current state of all our venues
    return state.venue
  });

  // const [title, setTitle] = useState("")
  // const [description, setDescription] = useState("")

  if (!venues) return null;

  return (
    <div id='venues-container'>
      <ul>
        {Object.values(venues).map(venue => (
          <li key={`li-${venue.id}`}>
            <NavLink to={`/venues/${venue.id}`} key={venue.id}>
              <span>Venue: {venue.name}</span>
              <img className="venue-list-picture" src={venue.bookingImgUrl} alt="Venue Picture"></img>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Venues;
