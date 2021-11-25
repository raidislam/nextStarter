import React from 'react'

export const getStaticPaths = async ()=>{
    const user = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await user.json();

    const paths = result.map(res=>{
        return{
            params:{
                userid:res.id.toString()
            }
        }
    })

    return{
        paths,
        fallback:false
    }
}


export const getStaticProps = async (context)=>{
    const id = context.params.userid;
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const result = await user.json();

    return{
        props:{
            result
        }
    }
}

const userDetails = ({result}) => {
    return (
        <div>
            <h2>User id : {result.id}</h2>
            <h4>Name : {result.name}</h4>
            <h4>Name : {result.email}</h4>
        </div>
    )
}

export default userDetails
