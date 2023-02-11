import { useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'

import { useDispatch } from 'react-redux'
import { setDisneyMovie } from '../features/movie/movieSlice'

import db from '../firebase'
import NewToDisney from './Home/NewToDisney'
import HollywoodOnDisney from './Home/HollywoodOnDisney'
import PopularOnDisney from './Home/PopularOnDisney'
import Originals from './Home/Originals'
import Trending from './Home/Trending'



function Home() {
    const dispatch = useDispatch();

    let populars = [];
    let hollywoods = [];
    let newTos = [];
    let originals = [];
    let trending = [];
    


    useEffect(() => {
        db.collection("Movies").onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
               switch (doc.data().type){
                case "popular":
                    populars = [...populars, {id: doc.id, ...doc.data()}];
                    break;
                case "hollywood":
                    hollywoods = [...hollywoods, {id: doc.id, ...doc.data()}];
                    break;
                case "newTo": 
                    newTos = [...newTos, {id: doc.id, ...doc.data()}];
                    break;
                case "original": 
                    originals = [...originals, {id: doc.id, ...doc.data()}];
                    break;
                case "trending":
                    trending = [...trending, {id: doc.id, ...doc.data()}];
                    break;

                default: 
                    break;

               }
            });

            dispatch(setDisneyMovie({
                popular:populars, 
                hollywood: hollywoods,
                newTo: newTos, 
                original: originals, 
                trending: trending
            }))
        })
    }, [])
        


    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Originals/>
            <Trending/>
            <NewToDisney/>
            <HollywoodOnDisney/>
            <PopularOnDisney/>
        </Container>
    )
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 250px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    
    &:before {
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`