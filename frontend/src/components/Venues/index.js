import { getVenues } from "../../store/venues"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom"
import "./Venues.css"

function Venues() {
  const sessionUser = useSelector(state => state.session.user)    //grab the session user
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVenues())
  }, [dispatch])

  const venues = useSelector(state => {
    return state.venue.list
  });

  // const [title, setTitle] = useState("")
  // const [description, setDescription] = useState("")

  if (!venues) return null;

  return (
    <div id='venueContainer'>
      <ul>
        {Object.values(venues).map(venue => (
          <li key={`li-${venue.id}`}>
            <NavLink to={`/venues/${venue.id}`} key={venue.id}>
              {/* this will be the venue image eventually*/}
              {venue.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Venues;
