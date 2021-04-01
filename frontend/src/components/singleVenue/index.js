import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import "./SingleVenue.css"

const SingleVenue = () => {
  const { id } = useParams();         //grabbing id of venue


  const venue = useSelector(state => {
    return state.venue[id];
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (

    <>
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
      <button onClick={(e) => handleSubmit(e)} />
    </>

  )

}

export default SingleVenue;
