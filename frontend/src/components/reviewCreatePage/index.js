import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { createReview } from "../../store/reviews"
import "./reviewCreate.css"

function ReviewCreatePage() {
  const { id } = useParams()
  const venueId = id;
  const history = useHistory();
  const dispatch = useDispatch()

  const [content, setContent] = useState("")
  let [rating, setRating] = useState("")
  const [validationErrors, setValidationErrors] = useState([])


  const authorId = useSelector((state) => state.session.user.id);
  console.log(authorId);


  const handleSubmit = (e) => {
    e.preventDefault();
    rating = parseInt(rating, 10)
    dispatch(createReview({ content, rating, venueId, authorId }))
    history.push("/")
  }

  return (
    <div className="create-review-container">
      <form className="create-review-form" onSubmit={handleSubmit}>
        <h2>Leave a Review!</h2>

        <ul>
          {validationErrors.map((error, i) => (
            <li key={i}>
              {error}
            </li>
          ))}
        </ul>
        <label>What'd You Think?</label>
        <input
          type="text" value={content} onChange={(e) => setContent(e.target.value)} required id="review-text-box"
        />

        <label>Leave a Rating!</label>
        <input placeholder="Please leave a numeric review" type="text" value={rating} onChange={(e) => setRating(e.target.value)} />

        <button type="submit">Send It!</button>
      </form>
    </div>

  )
}


export default ReviewCreatePage
