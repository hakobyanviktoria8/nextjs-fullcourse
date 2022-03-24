import React, { useState } from 'react'

function Events({events}) {
    const[eventsData, setEventsData] = useState(events)

    const handlePostId = async () => {
        const res = await fetch("http://localhost:4000/events?postId=1")
        const data = await res.json()
        setEventsData(data);
    }

    return (
        <div>
            <h1>Events</h1>
            <button onClick={handlePostId}>post Id 1</button>
            {
                eventsData.map(x=>
                    <div key={x.id}>
                        <h2>{x.id}. {x.name} - {x.postId}</h2>
                        <p>{x.email}</p>
                        <p>{x.body}</p>
                        <hr/>
                    </div>
                )
            }
        </div>
    )
}

export default Events

export async function getServerSideProps(){
    const res = await fetch("http://localhost:4000/events")
    const data = await res.json()

    return{
        props: {
            events: data
        }
    }
}