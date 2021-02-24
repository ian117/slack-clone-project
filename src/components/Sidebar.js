import React from 'react';
import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {sidebarItems} from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';

function Sidebar() {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Media Berserks
                </Name>
                <NewMessage>
                    <AddCircleIcon/>
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
               
                    {
                        sidebarItems.map((item) => (
                           <MainChannelItem>
                                {item.icon}
                                {item.text}
                            </MainChannelItem>
                            ))
                    }
                
            </MainChannels>
            <ChannelsContainer>
                    <NewChannelContainer>
                        <div>
                            Channels
                        </div>
                        <AddIcon></AddIcon>
                    </NewChannelContainer>
            </ChannelsContainer>

        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background-color: #350d36;
 `
const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
 `
const Name = styled.div`

 `
const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background-color: white;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    margin-right: 15px;
    cursor: pointer;
 `

 const MainChannels = styled.div`
    padding-top: 20px;
 `

 const MainChannelItem = styled.div`
    color: rgb(188, 171,188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
 `

 const ChannelsContainer = styled.div`
    color: rgb(188, 171, 188);
    margin-top: 10px;
 `

 const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
 `
