import "./reviews.css"
import * as reviewActions from '../../store/reviews';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Reviews() {
  const state = useSelector(state => state.list)

  return (
    <>
      <h2>HI THIS IS REVIEWS</h2>
    </>
  )
}

export default Reviews
