import { useState, useEffect } from "react";
import { useSelector } from "react-redux"

function ReviewCreatePage() {
  const [venueId, SetVenueId] = useState("1") //might get rid of this because we get it from a prop
  const [content, setContent] = useState("")
  const [rating, setRating] = useState("")
  // const [authorId, setAuthorId] = useState("1")

  const handleSubmit = (e) => {
    e.preventDefault(e);
  }

  return (
    <form>
      <ul>

      </ul>




    </form>

  )
}


export default ReviewCreatePage
