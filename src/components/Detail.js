import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from "../firebase"

function Detail(){
    const {id} = useParams();
    const [movie, setMovie] = useState([])
   

    useEffect(() => {
        db.collection("Movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists){
                setMovie(doc.data());
            }
        })
    }, [id])



return(
    <>
    {
        movie && (
            <>
             <Container>
                <Background>
                    <img src={movie.BackgroundImg}/>
                </Background>
                <Content>
                        <ImageTitle><img src={movie.TitleImg}   /></ImageTitle>
                        <h1>{movie.Genres}</h1>
                        <p>{movie.Description}</p>

                        <ButtonGroup>
                            <PlayBtn>
                                <img src="/images/play-icon-black.png"/>
                                <span>Play</span>
                            </PlayBtn>
                            <TrailerBtn>
                                <img src="/images/play-icon-white.png" />
                                <span>Trailer</span>
                            </TrailerBtn>
                            <AddtoPlaylistBtn>
                                <span></span>
                                <span></span>
                            </AddtoPlaylistBtn>
                            <GroupWatchBtn>
                                <img src="/images/group-icon.png"/>
                            </GroupWatchBtn>
                        </ButtonGroup>
                </Content>
            </Container>
    
            </>
        )
    }
   
    </>
)


}


const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    padding: 100px calc(3.5vw + 5px);
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.6;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;

    @media screen and (min-width: 991px) and (max-width: 1200px){
        max-width: 325px;
    }
    @media screen and (min-width: 375px) and (max-width: 550px){
        max-width: 250px;
    }
    @media screen and (min-width: 280px) and (max-width: 375px){
        max-width: 150px;
    }
    
    img{
        width: 100%;
        height: auto;
        object-fit: contain;
    }
`

const Content = styled.div`
    padding: 0 50px;
    display: flex;
    min-height: 95vh;
    overflow: hidden;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    position: relative;

    @media screen and (min-width: 991px) and (max-width: 1200px){
        min-height: 72vh;
    }
    @media screen and (min-width: 550px) and (max-width: 991px){
        min-height: 65vh;
    }
    @media screen and (min-width: 280px) and (max-width: 550px){
        min-height: 55vh;
        object-fit: fill;
    }

    h1{
        color: #fff;
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 15px;
        @media screen and (min-width: 550px) and (max-width: 1200px){
            font-size: 1rem;
        }
        @media screen and (min-width: 375px) and (max-width: 767px){
            font-size: 0.75rem;
        }
        @media screen and (min-width: 280px) and (max-width: 375px){
            max-width: 250px;
        }

    }
     
    p{
        line-height: 1.4;
        font-size: 20px;
        padding: 1rem 0;
        color: #f9f9f9;
        max-width: 650px;
        margin-bottom: 10px;
        @media screen and (min-width: 550px) and (max-width: 1200px){
            font-size: 1rem;
            max-width: 550px;
        }
        @media screen and (min-width: 375px) and (max-width: 767px){
            font-size: 0.75rem;
            padding: 0.5rem 0;
            max-width: 400px;
        }
        @media screen and (min-width: 280px) and (max-width: 375px){
            padding: 0.3rem 0;
            font-size: 0.75rem;
            
        }

    }
`
const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 385px ){
        justify-content: left;
    }
    
`
const PlayBtn = styled.button`
    cursor: default;
    outline: none;
    border: 1px solid rgba(249, 249, 249, 1);
    background: rgba(249, 249, 249, 1);
    font-size: 1.2rem;
    border-radius: 0.345rem;
    padding: 0.5rem 1.5rem;
    margin-right:22px;
    margin-bottom: 15px;
    display: flex;
    align-items: center; 
    justify-content: center;

    @media screen and (min-width: 550px) and (max-width: 1200px){
        padding: 0.5rem 1rem;
    }

    @media screen and (min-width: 375px) and (max-width: 550px){
        padding: 0.5rem 1rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px){
        border-radius: 0.145rem;
        padding: 0.4rem 0.7rem;
        margin-right: 13px;
        background: #f9f9ff;
    }
    

    img{
       width: 32px;
       height: auto;
       opacity: 1;
       z-index: 1500;
       object-fit: contain;

       @media screen and (min-width: 550px) and (max-width: 1200px){
            width: 25px;
       }
       @media screen and (min-width: 280px) and (max-width: 550px){
        width: 19px;
   }
    }

    span{
        color: #000;
        font-size: 1.2rem;
        font-weight: 300;
        text-transform: uppercase;
        line-height: 1.08;
        letter-spacing: 1px;

        @media screen and (min-width: 550px) and (max-width: 1200px){
            font-size: 1rem;
        }
        @media screen and (min-width: 375px) and (max-width: 550px){
            font-size: 0.8rem;
        }
        @media screen and (min-width: 280px) and (max-width: 375px){
            font-size: 0.8rem;
        }
    }
`

const TrailerBtn = styled(PlayBtn)`
    color: rgba(249, 249, 249, 1);
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(249, 249, 249, 1);

    span {
        color: #fff;
    }

    &:hover {
        color: #000;
        background: rgba(198, 198, 198, 1);
    }
`
const AddtoPlaylistBtn = styled.button`
    height: 41px;
    width: 41px;
    display: flex;
    cursor: pointer;
    margin-right:  22px;
    margin-bottom: 15px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.5);

    @media screen and (min-width: 550px) and (max-width: 1200px){
        height: 35px;
        width: 35px;
    }
    @media screen and (min-width: 280px) and (max-width: 550px){
        height: 29px;
        width: 29px;
        margin-right: 13px;
    }

    span{
        background-color: rgb(249, 249, 249);
        display: inline-block;

    

    &:first-child {
        height: 2px;
        width: 16px;
        transform: translate(1px, 0px) rotate(0deg);
        @media screen (min-width: 280px) and (max-width: 550px){
            width: 15px;
        }
    }

    &:nth-child(2){
        width: 2px;
        height: 16px;
        transform: translate(-8px) rotate(0deg);
        @media screen and (min-width: 280px) and (max-width: 550px){
            height: 13px;
        }
    }
}
`
const GroupWatchBtn = styled.button`
   
    height: 39px;
    width: 39px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    margin-bottom: 15px;
    background: rgb(0, 0, 0, 0.5);
    border: 2px solid #fff;
    @media screen and (min-width: 280px) and (max-width: 1200px){
        height: 31px;
        width: 31px;
    }

    img{
        width: 100%;
        height: auto;
        object-fit: contain;
        @media screen and (min-width: 550px) and (max-width: 1200px){
            height: 29px;
            width: 29px;
        }
        @media screen and (min-width: 280px) and (max-width: 550px){
            height: 23px;
            width: 23px;
        }

    }
`

export default Detail;


