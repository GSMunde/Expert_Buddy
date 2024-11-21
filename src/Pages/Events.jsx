import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EventList from '../Components/Events/EventList';

function Events() {
    const [event, setEvent] = useState([]);

  const apiURL = "https://expert-buddy-api.vercel.app/Events";

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setEvent(response.data) 
        console.log(response.data)
    };

    useEffect(() => {
        fetchData();
    },[]);

  return (
    <div>
        <EventList events={event}/>
    </div>
  )
}

export default Events;