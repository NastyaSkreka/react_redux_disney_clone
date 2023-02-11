import styled from 'styled-components'




const Footer = () => {
    return (
        <>
            <Section>
                <Container>
                    <FooterBrand>
                        <img src="/images/logo.svg" alt="logo"/>
                    </FooterBrand>
                    <Nav>
                        <li><p>Privacy policy </p></li>
                        <li><p>Cookie policy</p></li>
                        <li><p>Subscription contract </p></li>
                        <li><p>Help </p></li>
                        <li><p> About us </p></li>
                    </Nav>
                    <Copyright>
                        <p>©DisneyPlus. All Rights Reserved 2023</p>
                    </Copyright>
                </Container>
            </Section>
        </>
    )
}


const Section = styled.section`
    background-color: #040714;
    padding: 2rem 0;
    margin-bottom:0;

    @media screen and (max-width: 550px){
        padding: 1rem 0;
    }

`
const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`
const FooterBrand = styled.div`
    text-align: center;
    img{
        width: 10rem;
        height: auto;
        object-fit: fill;

        @media screen and (max-width: 550px){
            width: 7rem;
        }
    }
`
const Nav = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    flex-shrink: 0;
    flex-grow: initial;
    justify-content: center;

    li{
        list-style: none;

        p{
            padding: 0.5rem;
            font-size: 0.9rem;
            margin-right: 0.3rem;
            @media screen and (max-width:550px){
                font-size: 0.75rem;
                padding: 0.1rem;
            }
        }
    }

`

const Copyright = styled.div`
    text-align: center;

    p{
        font-weight: 400;
        margin-top: 1vh;
        @media screen and (max-width: 550px){
            font-size: 0.95rem;
        }
    }

`

export default Footer;