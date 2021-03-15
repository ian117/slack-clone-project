import React, { useState, useEffect} from 'react'
import styled from "styled-components";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import database from '../firebase';
import { useParams } from 'react-router';
import firebase from 'firebase';

function Chat({user}) {

    let { channelID } = useParams();
    const [ channel, setChannel] = useState({});
    const [ messages, setMessages] = useState([]);

    const getMessages = () => {
        database.collection('Rooms')
        .doc(channelID)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
            let messages2 = snapshot.docs.map((doc) => doc.data());
            setMessages(messages2);
        })
    }

    const sendMessage = (text) => {
        if(channelID) {
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo,
            }

            database.collection("Rooms").doc(channelID).collection('messages').add(payload)
        }
    }


    const getChannel = () => {
        database.collection('Rooms').doc(channelID).onSnapshot((snapshot) => {
            setChannel(snapshot.data())
        })
    }

    useEffect(() => {
        getChannel()
        getMessages()
    }, [channelID])


    return (
        <Container>
          <Header>
            <Channel>
                <ChannelName>
                    # {channel && channel.name}
                </ChannelName>
                <ChannelInfo>
                    The best Agency in da world
                </ChannelInfo>
            </Channel>

            <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info/>

             </ChannelDetails>
           
          </Header>

            <MessageContainer>  
                {
                    messages.length > 0 && messages.map((data, index) => (
                        <ChatMessage key={index} name={data.user} text={data.text} image={data.userImage} timestamp={data.timestamp}/>
                    ))
                }
            </MessageContainer>
        
            <ChatInput sendMessage={sendMessage}/>
        
        </Container>
    )
}

export default Chat

const Container = styled.div`
  display: grid;
  grid-template-rows: 65px auto min-content;
  background-color: rgba(220,220,220, 1);
  min-height: 0;
`

const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(83, 39, 83,.12)
`

const Channel = styled.div`
    
`
const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 14px;
    margin-top: 8px;
`

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    
    div {
        color: #606060;
    }

    svg {
        color: #404040;
    }
`

const Info = styled(InfoIcon)`
    margin-left: 10px;
`

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
`