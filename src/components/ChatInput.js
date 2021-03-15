import React, { useState } from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput({sendMessage}) {


    const [input, setInput] = useState("")

    const send = (e) => {
        e.preventDefault();
        if(!input){
            return
        }
        sendMessage(input)
        setInput("")
    }

    return (
        <Container>
            <InputContainer>
                <form>
                    <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Here goes your message..." value={input} />
                    <SendButton type="submit" onClick={send}>
                        <Send/>
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 25px;
`
const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 45px;
        align-items: center;
        padding-left: 10px;
        

        input, textarea {
            flex:1;
            border: none;
            font-size: 16px;
            background-color: inherit;
            caret-color: #007a5a;
            caret-shape: underscore;
        }

        input:focus {
            outline: none;
        }
    }
`
const SendButton = styled.button`
    background-color: #007a5a;
    border-radius: 2px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    outline:none;
    border-style: none;
    
    .MuiSvgIcon-root {
        width: 25px
    }

    :active {
        opacity: 0.7;
    }

`

const Send = styled(SendIcon)`
    color: #D9D9D9
`