import * as venueActions from "../../store/venues"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"

function Venues() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(venueActions.getVenues())
  }, [dispatch])

  const venues = useSelector(state => state.list);

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
