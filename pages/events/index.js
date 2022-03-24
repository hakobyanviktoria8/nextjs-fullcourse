import React, { useState } from 'react'
import {useRouter} from "next/router"

function Events({events}) {
    const[eventsData, setEventsData] = useState(events)
    const router = useRouter()

    const handlePostId = async () => {
        const res = await fetch("http://localhost:4000/events?postId=1")
        const data = await res.json()
        setEventsData(data);
        router.push("/events?postId=1", undefined, {shallow:true})
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

export async function getServerSideProps(context){
    const {query} = context
    const {postId} = query
    console.log(query, postId);  //{ postId: '1' } 1
    const queryString = postId ? "postId=1" : ""
    const res = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await res.json()

    return{
        props: {
            events: data
        }
    }
}