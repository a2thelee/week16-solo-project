import { getOneVenue } from "../../store/venues"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./SingleVenue.css"

const SingleVenue = () => {
  const dispatch = useDispatch();
  const venue = useSelector(state => state.venues);
  const { params } = useParams();

  useEffect(() => {
    dispatch(getOneVenue(params.id))
  }, [dispatch, params.id]);

  return (
    <div className='venueId'>
      {console.log(venue, 'venueIdPage')};
      <h2>{venue.name}</h2>
      <ul>
        <li>{venue.address}</li>
        <li>{venue.state}</li>
        <li>{venue.city}</li>
        <li>{venue.address}</li>
        <li>{venue.description}</li>
        <li>Open: {venue.state} to {venue.closeHours}</li>
        <li>Price per hour: {venue.cost}</li>
      </ul>
    </div>

  )

}

export default SingleVenue;
