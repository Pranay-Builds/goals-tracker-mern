import React, { useEffect } from 'react'
import { useGoalsStore } from '../store/useGoals'

function Home() {

    const { goals, fetchGoals } = useGoalsStore();

    useEffect(() => {
        fetchGoals();
    }, [fetchGoals])
    
    return (
        <main>
            <h1 className='text-3xl font-bold text-center mt-3'>Goals 🚀</h1>
        </main>
    )
}

export default Home