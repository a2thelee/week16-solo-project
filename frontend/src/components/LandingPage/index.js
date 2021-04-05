import { useSelector } from "react-redux"
import Reservations from "../reservations"
import UserReviews from "../userReviews"

function LandingPage() {
  const user = useSelector(state => state.session.user)

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <Reservations />
        <UserReviews />
      </>
    )
  }

  return (
    <>
      {sessionLinks}
    </>
  )
}


export default LandingPage;
