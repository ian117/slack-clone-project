import React from 'react'
import styled from 'styled-components';

function ChatMessage({text, name, image, timestamp}) {
    return (
        <Container>
            <UserAvatar>
                <img alt="img-user" src={image}/>
            </UserAvatar>
            <MessageContent>
                <Name>{name}
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>{text}</Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;

    :hover {
        background-color: rgba(112,112,112, 0.2);
    }

    
    :hover > div > img {
        border-radius: 10%;
    }

`
const UserAvatar = styled.div`
    width: 40px;
    height: 40px;
    overflow: hidden;
    img {
        width: 100%;
        border-radius: 50%;
        transition: all 0.2s;
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`
const Name = styled.span`
    font-weight: 900;
    font-size: 1.1rem;
    line-height: 1.4;

    span {
        font-size: 0.9rem;
        font-weight: 300;
        color: rgb(97,96,97);
        margin-left: 8px;
    }
`
const Text = styled.span`

`