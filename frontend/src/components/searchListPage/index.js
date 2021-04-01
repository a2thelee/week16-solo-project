import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import venueReducer from "../../store/venues";
import "./searchListPage.css"

function SearchListPage() {
  const venueSearch = useSelector(state => state.search);

  return (
    <div>
      <ul>
        {venueSearch.map(venue => (
          <li key={`li-${venue.id}`}>
            <NavLink to={`/venues/${venue.id}`} key={venue.id}>Venue Name: {venue.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchListPage;
