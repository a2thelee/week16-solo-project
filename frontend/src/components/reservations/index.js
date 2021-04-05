import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getReservation } from "../../store/reservations"
import { NavLink } from "react-router-dom"
import { parseISO } from "date-fns"

import "./reservations.css"


function Reservations() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.session.user.id)

  useEffect(() => {
    dispatch(getReservation(state))
  }, dispatch, state)

  const reservationObjects = useSelector(state => state.reservation)

  if (!state) return null;
  if (!reservationObjects) return null;

  const reservations = Object.values(reservationObjects)

  return (
    <div className='reservation'>
      <h2>Upcoming Games!</h2>
      <ul className='reservation-list'>
        {reservations.map((item, i) => (

          <li key={`li-${i}`}>
            <NavLink to={`/venues/${item.venueId}`} key={i} className='navlink'>
              { }
              {`${parseISO(item.gameDate).toString().slice(0, 10)}`}
              {/* <img src={item.bookingImgUrl} alt='booking'/> */}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Reservations;
