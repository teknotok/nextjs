import { Button } from '@material-ui/core';
import Head from 'next/head';
import styled from "styled-components";
import {auth, provider} from '../firebase';

export default function login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }
    return (
        <Container>
            <Head>
            <title>Login Page</title>
            </Head>
            <LoginContainer>
                <Logo src="https://telegramturkiye.com/wp-content/uploads/2019/12/Whatsapp-Logo.png"/>
                <Button onClick={signIn} variant="outlined">Sing in with Google</Button>
            </LoginContainer>
        </Container>
    )
}
const Container = styled.div`
display:grid;
place-items:center;
height:100vh;
background-color:whitesmoke;
`;

const LoginContainer = styled.div`
padding:100px;
display:flex;
flex-direction:column;
align-items:center;
background-color:white;
border-radius:5px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Logo = styled.img`
width:200px;
margin-bottom:50px;
`;