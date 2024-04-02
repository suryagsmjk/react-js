import React, { useState } from 'react'

function Froms() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let getFormsData = (event) => {
        event.preventDefaulf();
        console.log(username, password);
        setUsername("")
        setPassword("")
    }
    const usernameHandeler = (event) => {
        setUsername(event.target.value)
    }
    return (
        <>
            <form onSubmit={getFormsData}>
                <table>
                    <tr>
                        <td><label>Username</label></td>
                        <td><input type='text' onChange={usernameHandeler} value={username}></input></td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>
                        <td><input type='password' onChange={(event) => setPassword(event.target.value)} value={password}></input></td>
                    </tr>
                    <tr>
                        <td><button type='submit'>submit</button></td>

                    </tr>

                </table>

            </form>
        </>

    )
}

export default Froms