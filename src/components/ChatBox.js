import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import ChatBoxInput from "./ChatBoxComponents/ChatBoxInput"
import MessageBox from "./ChatBoxComponents/MessageBox"

const socket = io('http://localhost:4000', {
        reconnectionDelayMax: 10000
    })

socket.on("connect", () => {

})

function ChatBox(){

    const [messageList, setMessageList] = useState([])
    const [input, setInput] = useState('')

    function sendMessage(msg){
        socket.emit("send_message",{message: msg})
    }

    useEffect(() => {
        socket.on("receive_message",msg => {
            const message = msg.message
            var currentMsgList = messageList
            currentMsgList.push(message)
            setMessageList([...currentMsgList])
        })
    },[messageList])

    return(
        <div>
            <MessageBox list={messageList}></MessageBox>
            <ChatBoxInput input={input} setInput={setInput} sendMessageFunc={sendMessage}></ChatBoxInput>
        </div>
    )
}

export default ChatBox