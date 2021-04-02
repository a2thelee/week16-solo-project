import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getReservation } from "react-redux"


function Reservations() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.session.user.id)

  useEffect(() => {
    dispatch(getReservation(sessionUser))
  }, dispatch, state)


  return (
    <>
      <h3> Hi these are reservations! </h3>
    </>
  )
}
