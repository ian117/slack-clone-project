import React from 'react'
import styled from "styled-components";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoIcon from '@material-ui/icons/Info';

function Chat2() {
    return (
        <Container>
            <Header>
                <InfoChannel>
                    <ChannelHeading>
                        <HeadingText>
                            #MediaBer
                        </HeadingText>
                        <HeadingSymbol>
                            <StarOutlineIcon/>
                        </HeadingSymbol>

                    </ChannelHeading>
                    <ChannelText>
                    Company-Wide announcements and work based matters
                    </ChannelText>
                </InfoChannel>
                <DetailsBox>
                    <DetailsHeading>
                        Details
                    </DetailsHeading>
                    <DetailsSymbol>
                        <InfoIcon/>
                    </DetailsSymbol>
                </DetailsBox>
            </Header>
            <Main>

            </Main>
        </Container>
    )
}

export default Chat2;

const Container = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
`

const Header = styled.div`
  background-color: rgb(230, 230,230);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
`

const Main = styled.div`

`

const InfoChannel = styled.div`

`

const ChannelHeading = styled.div`
    font-weight: bold;
    display: flex;
`

const HeadingText = styled.div`

`

const HeadingSymbol = styled.div`
    padding-left: 5px;
`

const ChannelText = styled.div`
    font-size: 0.9rem;
    font-weight: 380;
    color: rgb(90, 90,90);
`

const DetailsBox = styled.div`
    display: flex;
    cursor: pointer;
    padding-right: 10px;
`

const DetailsHeading = styled.div`
    color: rgb(60, 60,60);
    font-weight: 500;
`

const DetailsSymbol = styled.div`
    color: rgb(60, 60,60);
    font-weight: 500;
    padding-left: 5px;
`