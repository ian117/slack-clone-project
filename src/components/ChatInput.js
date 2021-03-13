import React from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Here goes your message..."/>
                    <SendButton>
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
const SendButton = styled.div`
    background-color: #007a5a;
    border-radius: 2px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;

    .MuiSvgIcon-root {
        width: 25px
    }

`

const Send = styled(SendIcon)`
    color: #D9D9D9
`