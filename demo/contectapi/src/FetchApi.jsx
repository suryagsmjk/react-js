import React, { useEffect, useState } from 'react'

function FetchApi() {
    let [user, setUser] = useState([])
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")

        //     .then(res => res.json())
        //     .then(data => setUser(data))
        //     .catch(error => console.log(error))

        FetchData()

    }, [])
    //-----Async and await function method----------------
    async function FetchData() {
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await res.json()
        setUser(data)

    }

    return (
        <>
            <h1>This is The Fetcg API</h1>
            {user.map(e => {
                return (
                    <li>Name : {e.name}-------User Name : {e.username}</li>
                    // <table border={"2px"} >
                    //      <th>Name</th>
                    //     <th>User Name</th>
                    //    <th>Email</th>
                    //    <th>phone</th>


                    // <td>{e.name}</td>
                    //   <td>{e.username}</td>
                    //<td>{e.email}</td>
                    //<td>{e.phone}</td>

                    //   </table>

                )
            })}
        </>
    )
}

export default FetchApi