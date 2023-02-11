import styled from "styled-components"
import { useSelector } from "react-redux"
import { selectHollywood } from "../../features/movie/movieSlice"
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const HollywoodOnDisney = () => {

    const movies = useSelector(selectHollywood)

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1, 
        autoplay: false, 
        responsive: [
            { breakpoint: 1024, settings: {slidesToShow:4}}, 
            { breakpoint: 991, settings: {slidesToShow: 3} },
            { breakpoint: 767, settings: {slidesToShow: 2}}, 
            { breakpoint: 452, settings: {slidesToShow: 1} }
        ]
    }
    return (
        <>
            <Container>
                <h2>Hollywood On Disney</h2>
                <Carousel {...settings}>
                {
                        movies && movies.map((value, index) => (
                            <Wrap key={index}> 
                            <div><Link to={`/detail/${value.id}`}>
                                <img src={value.CardImg} alt={value.id} />
                            </Link></div>
                             </Wrap>
                        ))
                    }
                </Carousel>
            </Container>
        
        </>
    )
}

const Container = styled.section`
    padding: 1rem 0;
    
    h2{
        font-size: 1.7rem;
        text-transform: uppercase;
        font-weight: 300;
        text-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.1);
        margin: 2vh 0 1vh 2rem;

        @media screen and (max-width: 991px){
            font-size: 1.1rem;
        }

        @media screen and (max-width: 550px){
            font-size: 0.95rem;
        }
    }
`
const Carousel =  styled(Slider)`

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171)
        }
    }

    ul li.slick-active button{
        &::before{
            color: white;
        }
    }

    & > button {
        opacity: 0;
        x-index: 1500;
        width: 5vw;
        heigt: 100%;

        &:hover{
            opacity: 1;
            z-index: 2000;
            transition: opacity 0.2s ease 0s;
        }
    }
    .slick-prev{
        left: -75px;
    }
    .slick-next{
        right: -75px;
    }
    .slick-list{
        overflow: initial;
    }
   

   
`

const Wrap = styled.div`
    position: relative;
    
    div{
        border-radius: 4px;
        padding: 10px;
        display: block;
        object-position: center;
    
    img{
        width: 100%;
        height: 25vh;
        object-fit: fill;
        border-radius: 4px;
        z-index: 1500;
        position: relative;
        transition: all 500ms ease;

        @media screen and (max-width: 991px){
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
    &:hover{
        padding: 0px ;
        border: 4px solid rgba(249, 249, 249, 0.8 );
    }


`

export default HollywoodOnDisney; 