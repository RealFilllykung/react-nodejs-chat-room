import { Card, Form, Button, Row, Col } from "react-bootstrap"

function ChatBoxInput(props){

    const input = props.input
    const setInput = props.setInput
    const sendMessageFunc = props.sendMessageFunc

    function handleChange(e){
        setInput(e.target.value)
    }

    function handleButtonPress(e){
        if (input === '') return
        //Send the message to server
        sendMessageFunc(input)
        setInput('')
    }

    function handleKeyPress(e){
        if (e.key === 'Enter'){
            e.preventDefault()
            if (input === '') return
            sendMessageFunc(input)
            setInput('')
        }
    }

    return(
        <Card>
            <Row>
                <Col xs="auto">
                    <Form>
                        <Form.Control type="text" value={input} placeholder="Input message here" onChange={(e) => handleChange(e)} onKeyDown={(e) => handleKeyPress(e)}></Form.Control>
                    </Form>
                </Col>
                <Col>
                    <Button variant="primary" onClick={(e) => handleButtonPress(e)}>Send</Button>
                </Col>
            </Row>
        </Card>
    )
}

export default ChatBoxInput