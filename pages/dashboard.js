import React,{useEffect, useState} from 'react'

function Dashboard() {
    const[isLoading, setIsLoading] = useState(true)
    const[dashboardData, setDashboardData] = useState(null)

    // when components mount
    useEffect(()=>{
        // console.log("here")
        async function fetchData(){
            const res = await fetch("http://localhost:4000/dashboard")
            const data = await res.json()
            setDashboardData(data)
            setIsLoading(false)
        }
        fetchData()
    },[])

    return (
        <div>
            <h1>All Dashboard</h1>
            {isLoading && <h2>Loading...</h2>}
            <p>Dashboard posts {dashboardData?.posts}</p>
            <p>Dashboard likes {dashboardData?.likes}</p>
            <p>Dashboard followers {dashboardData?.followers}</p>
            <p>Dashboard following {dashboardData?.following}</p>
            {console.log(dashboardData)}
        </div>
    )
}

export default Dashboard