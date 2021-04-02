import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import "searchIdPage.css"

function SearchIdPage() {
  const { id } = useParams();

  const searchVenue = useSelector(state => {
    return state.search[id];
  })

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <>
      <h2>Hello! this is searchIdPage!!!</h2>
    </>
  )

  export default SearchIdPage;







}
