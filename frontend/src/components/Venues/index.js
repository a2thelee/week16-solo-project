import { getVenues } from "../../store/venues"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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

  return (
    <div className="venueContainer">
      <h2>Hi this is Venues!</h2>
      <ul>
        {venues.map(venue => {
          <li key={venue.id}>{venue}</li>
        })}
      </ul>
    </div>


  )
}

export default Venues;
