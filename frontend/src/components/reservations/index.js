import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getReservation } from "../../store/reservations"

import "./reservations.css"


function Reservations() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.session.user.id)

  useEffect(() => {
    dispatch(getReservation(state))
  }, dispatch, state)


  return (
    <>
      <h3> Hi these are reservations! </h3>
    </>
  )
}

export default Reservations;
