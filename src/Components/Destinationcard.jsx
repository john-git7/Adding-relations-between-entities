import React from 'react'

function DestinationCard({ id, name, location, image, description, price }) {
  return (
   
    <div className="destination-card" style={{display:'flex',flexDirection:'row',alignContent:'space-evenly'}}>
      <img src={image} alt={name} style={{height:'400px',width:'400px',padding:'20px'}}/> <br />
      <center>
      <div className="destination-card-content" style={{paddingLeft:'90px',fontSize:'25px'}}>
        <p>{name}</p>
        <div className="location">Location: {location}</div>
        <div className="description">{description}</div>
        <div className="price">Price: {price}</div><br />
      </div>
      </center>
    </div>
    
  )
}

export default DestinationCard