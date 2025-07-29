import React, { useEffect, useState } from 'react'
import { fakeChatFetch } from './api/fakeChatFetch';

const Chat = () => {
    const [loading, setLoading] = useState(true);
    const [chatData, setChatData] = useState([]);

    useEffect(()=>{
        fakeChatFetch('https://example.com/api/userchat')
            .then((res) =>{
                setChatData(res.data);
                setLoading(false)
            })
            .catch((err) =>{
                console.log(err.message)
            })
    }, [])
  return (
    <div>
        {
            loading ? <p>Loading Chats...</p> : (
                <ul>
                    {
                        chatData.map((c, index) =>(
                            <li key={index}>{c.name}'s Chat
                                <ul>
                                    {c.messages.map((c, index) =>(
                                        <li key={index}>{c.from} : {c.message}</li>
                                    ))}
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}

export default Chat