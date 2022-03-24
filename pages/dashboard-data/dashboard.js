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

    if(isLoading){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Dashboard posts {dashboardData?.posts}</p>
            <p>Dashboard likes {dashboardData?.likes}</p>
            <p>Dashboard followers {dashboardData?.followers}</p>
            <p>Dashboard following {dashboardData?.following}</p>
        </div>
    )
}

export default Dashboard