import styled from 'styled-components'
import Banner from './Login/Banner'

const Login = () => {
    return  (
        <>
            <Main>
                <Banner/>
            </Main>
        </>
    )
}

const Main = styled.main`
    width: auto;
    height: auto;
    overflow: auto;
`

export default Login;