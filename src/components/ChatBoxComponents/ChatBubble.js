import { Card } from 'react-bootstrap';

function ChatBubble(props){
    const list = props.list

    const RenderedList = () => {
        return list.map((item,index) => <Card>{item}</Card>)
    }

    return(
        <div>
            <RenderedList></RenderedList>
        </div>
    )
}

export default ChatBubble