import React from 'react'

function EventsCard({ item }) {
  return (
    <div className="events-card">
      <img src={item.image} alt="" /> <br />
      <div className="events-texts">
        <span>{item.date}</span>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default EventsCard