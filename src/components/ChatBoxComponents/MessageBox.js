import { Card } from "react-bootstrap"
import ChatBubble from "./ChatBubble"

function MessageBox(props){
    return (
        <Card className="text-dark">
            <Card.Title>Messages</Card.Title>
            <ChatBubble list={props.list}></ChatBubble>
        </Card>
    )
}

export default MessageBox