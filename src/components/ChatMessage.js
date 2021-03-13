import React from 'react'
import styled from 'styled-components';

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img alt="img-user" src="https://randomuser.me/api/portraits/women/19.jpg"/>
            </UserAvatar>
            <MessageContent>
                <Name>IanVass
                    <span>13/03/2021 02:31 PM</span>
                </Name>
                <Text>Who da fuck fuck up the backend?!!</Text>
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