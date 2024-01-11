import React from 'react'
import { events } from '../../datas/events'
import EventsCard from './EventsCard/EventsCard'
import "./Events.css"

function Events() {
    return (
        <div className="events">
            <h1>Анонс мероприятий</h1>
            <div className="container">
                {
                    events.map((item) => <EventsCard item={item} />)
                }
            </div>
                <button className='events-btns'>Смотреть еще</button>
            <div className="container-mobile">
                {
                    events.map((item) => <EventsCard item={item} />)
                }
            </div>
        </div>
    )
}

export default Events