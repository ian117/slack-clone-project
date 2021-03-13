import React from 'react'
import styled from "styled-components";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from './ChatInput';

function Chat() {
    return (
        <Container>
         <Header>
            <Channel>
                <ChannelName>
                    #MediaBer
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
        
         </MessageContainer>
        
        <ChatInput>

        </ChatInput>
        
        </Container>
    )
}

export default Chat

const Container = styled.div`
  display: grid;
  grid-template-rows: 65px auto min-content;
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

`