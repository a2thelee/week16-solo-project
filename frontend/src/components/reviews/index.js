import "./reviews.css"
import { createReview } from '../../store/reviews';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function Reviews() {
  const { id } = useParams();
  const reviews = useSelector(state => state.reviews)
  const history = useHistory();
  const user = useSelector(state => state.session.user);

  console.log(reviews)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      history.push(`/reviews/${id}`)
    } else {
      history.push("/login")
    }
  }

  if (!reviews) return null;

  let sessionLinks;

  if (user) {
    sessionLinks = (
      <>
        <button onClick={handleSubmit}>Played here? Review it!</button>
      </>
    )
  }

  if (!user) return null;


  return (
    <div className="reviews-container">
      <h2>What Players Are Saying!</h2>
      <ul className="reviews-list">
        {Object.values(reviews).map((review, i) => (
          <>

            <li key={`1-${i}`}>{review.content}</li>

            <li key={`2-${i}`}>Score: {review.rating}</li>

          </>
        ))}
      </ul>
      { sessionLinks}

    </div >
  )
}

export default Reviews
