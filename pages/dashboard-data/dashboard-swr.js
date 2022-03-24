import React from 'react'
import useSWR from 'swr'

const fetcher = async () => {
    const res = await fetch("http://localhost:4000/dashboard")
    const data = await res.json()
    return data
}

// with SET automatically update client-side data fetching
function DashboardSWR() {
    const { data, error } = useSWR('dashboard/dashboard-swr', fetcher)
    if (error) return <div>Error here {error}</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <h1>Dashboard SWR</h1>
            <p>Dashboard posts {data?.posts}</p>
            <p>Dashboard likes {data?.likes}</p>
            <p>Dashboard followers {data?.followers}</p>
            <p>Dashboard following {data?.following}</p>
        </div>
    )
}

export default DashboardSWR