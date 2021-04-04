import { useSelector } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"
import "./searchListPage.css"

function SearchListPage() {
  const venueSearch = useSelector(state => state.search);
  const history = useHistory();

  if (!venueSearch.length) {
    history.goBack();
  }

  return (
    <div>
      <ul>
        {Object.values(venueSearch).map((venue, i) => (
          <li key={`li-${i}`}>
            <NavLink to={`/venues/${venue.id}`} key={venue.id}>
              <span>Venue: {venue.name}</span>
              <img className="venue-list-picture" src={venue.bookingImgUrl} alt="Venue Picture" />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchListPage;
