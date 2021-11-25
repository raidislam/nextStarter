import React from 'react'
import Link from "next/link";
export const getStaticProps = async ()=>{
    const user = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await user.json();

    return {
        props:{
            result
        }
    }
}

const user = ({result}) => {
    return (
        <div>
            {
                result.map(res=>{
                    return <div key={res.id}>
                        <h2>Name:{res.name}</h2>
                        <h3>Email:{res.email}</h3>
                        <Link href={`/user/${res.id}`}>
                            <a>Details</a>
                        </Link>
                    </div>
                })
            }
        </div>
    )
}

export default user
