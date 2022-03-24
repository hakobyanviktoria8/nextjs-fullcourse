import React from 'react'
import { useRouter } from 'next/router';

function DashboardData() {
    const router = useRouter()
  return (
    <div>
        <h1>Dashboard Data</h1>
        <button onClick={()=>router.push("/dashboard-data/dashboard")}>Dashboard</button>
        <button onClick={()=>router.push("/dashboard-data/dashboard-swr")}>Dashboard SWR</button>
    </div>
  )
}

export default DashboardData