import React, {useState} from 'react';
import styled from 'styled-components';
import image from '../utils/slack_logo.png';
import { auth, provider } from '../firebase';


// https://image.shutterstock.com/image-vector/person-icon-flat-symbol-design-260nw-424612276.jpg

function Login({setUser}) {

    const [name, setName] = useState("");

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            setUser(newUser)
        })
        .catch((err) => console.error(err.message))
    }


    const signInNormal = () => {
        if (name.length === 0) {
            return
        }
        try {
            const newUser = {
                name: name,
                photo: "https://image.shutterstock.com/image-vector/person-icon-flat-symbol-design-260nw-424612276.jpg",
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            setUser(newUser)
        } catch (err) {
            console.log(err.message)
        }
    }


    return (
        <Container>
            <Content>
                <SlackImage alt="slack" src={image}/>
                <h2>Sign In Slack</h2>
                <Okdiv>
                <input placeholder="Name" value={name} onChange={e => setName(e.target.value)}></input>
                <SignInButton onClick={() => signInNormal()}>Sign In</SignInButton>
                <SignInButton onClick={() => signIn()}>Sign In With Google</SignInButton>
                </Okdiv>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    background-color: white;
    padding: 100px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SlackImage = styled.img`
    height: 100px;
    width: 100px;
`

const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #0a8d48;
    color: white;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    transition: all 0.9s;

    :focus {
        outline: none;
    }

    :active {
        background-color: #2eb67d;
    }
`

const Okdiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    input {
        margin-top: 20px;
        padding: 15px;
        font-size: 1rem;
        outline: none;
        border-radius: 10px;
        border: 1px solid black;
    }
`