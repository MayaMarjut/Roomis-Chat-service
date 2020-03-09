// import React, {useState} from 'react'
// import {socketConnection, getAvailableUsers, disconnect, sendMessage} from "../services/clientSocketService"

// const SocketTest = () => {
//     const [message, setMessage] = useState("")

//     const send = () => {
//         sendMessage(message)
//     }

//     return (
//         <div>
//             <div id="output"></div>
//             <input type="text" value={message} onChange={event => setMessage(event.target.value)} />
//             <button type="button" onClick={send}>Send</button>
//             <button type="button" onClick={socketConnection}>Connect</button>
//             <button type="button" onClick={getAvailableUsers}>get users</button>
//             <button type="button" onClick={disconnect}>disconnect</button>
//         </div>
//     )
// }

// export default SocketTest
