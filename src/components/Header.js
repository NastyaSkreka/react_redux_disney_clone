import { useEffect } from "react";
import {Link} from "react-router-dom"
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { useNavigate} from "react-router-dom"
import { 
    selectUserName, 
    selectUserPhoto, 
    setUserLogin, 
    setSignOut
 } from "../features/user/userSlice";
import {useDispatch, useSelector } from "react-redux";


const  Header = () =>  {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName, 
                    email: user.email, 
                    photo: user.photoURL
               }))
               navigate('/')  
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            let user = result.user
           dispatch(setUserLogin({
                name: user.displayName, 
                email: user.email, 
                photo: user.photoURL
           }))
           navigate("/")
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut());
            navigate("/login")
        })
    }

    return (
        <>
            <Nav>
                <NavLogo>
                    <img src="/images/logo.svg"  alt="Disney+"/>
                </NavLogo>
                {
                  !userName ? (
                    <LoginButton onClick={signIn}>
                        Log in
                    </LoginButton>
                  ) : (
                    <>
                     <MenuLinks>
                    <li><Link to="/Home" className="nav-link">
                        <img src="/images/home-icon.svg" alt="HOME"/>
                        <span>HOME</span>
                    </Link></li>
                    <li><Link to="#" className="nav-link">
                        <img src="/images/search-icon.svg"  alt="SEARCH" />
                        <span>SEARCH</span>
                    </Link></li>
                    <li><Link to="#" className="nav-link">
                        <img src="/images/watchlist-icon.svg"  alt="WATCHLIST"/>
                        <span>WATCHLIST</span>
                    </Link></li>
                    <li><Link to="#" className="nav-link">
                        <img src="/images/original-icon.svg"  alt="ORIGINALS"/>
                        <span>ORIGINALS</span>
                    </Link></li>
                    <li><Link to="#" className="nav-link">
                        <img src="/images/movie-icon.svg" alt="MOVIES"/>
                        <span>MOVIES</span>
                    </Link></li>
                    <li><Link to="#" className="nav-link">
                        <img src="/images/series-icon.svg" alt="SERIES"/>
                        <span>SERIES</span>
                    </Link></li>
                </MenuLinks>
                <UserAuth onClick={signOut}> 
                   <img  src={userPhoto} alt="admin/disney" />
                </UserAuth>
                    </>

                  )
                }
               
            </Nav>
        
        </>
    )
}

const LoginButton = styled.button`
    font-size: 1.2rem;
    color: #fff;
    cursor:pointer;
    padding: 5px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border: 1px solid #f9f9f9;
    transition: all 0.2s ease 0s;
    background-color: rgba(0, 0, 0, 0.6);
    @media screen and (min-width: 280px) and (max-width: 550px){
        font-size: 0.8rem;
        padding: 4px 13px;
    }
    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

`

const Nav = styled.nav`
    background-color: #040714;
    display: flex;
    min-height: 10vh;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 2rem;
`


const NavLogo = styled.div`
    width: 100px;
    height: auto;
    object-position: center;

    img{
        width: 100%;
        height: auto;
        object-fit: fill;
    }

`
const MenuLinks = styled.div`
    column-gap: 45px;
    row-gap: 3px;
    display: flex;
    align-items: center;
    flex-wrap:  wrap;
    padding: 0 20px;

    li {
        list-style: none;
        > .nav-link{
            display: flex;
            align-items: center;
            text-decoration: none;
            position: relative;
        
            img{
                width: 1.3rem;
                height: 1.3rem;
                object-fit: contain;
            }

            span{
                color: #fff;
                font-size: 1rem;
                font-weight: 300;
                letter-spacing: 1px;
                line-height: 1.08;
                padding: 0.5rem;
                margin-top: 5px;
                position: relative;

                &::before{
                    position: absolute;
                    content: "";
                    top: 100%;
                    left: 0;
                    right: 0;
                    width: 0%;
                    height: 2px;
                    background: #f9f9f9;
                    transition: all 0.7s cubic-bezier(0.445, 0.05, 0.55, 0.95);
                }
                @media screen and (max-width: 767px){
                    font-size: 0.7rem; 
                }
                @media screen and (max-width: 550px){
                    font-size: 0.5rem; 
                }
            }
           

        }
        &:hover{
            span::before{
                width: 100%;
            }
        }

    }

    @media screen  and (max-width: 425px){
        display: none;
    }

`
const UserAuth = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    object-position: center;

    img{
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 100px;
    }

`



export default Header;

