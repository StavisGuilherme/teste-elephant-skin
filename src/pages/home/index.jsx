import * as S from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import { SideBar , Header, LandingFooter} from '../../components'

const Home = () => {
    return (
        <S.OuterContainer>
            <SideBar />

            <S.InnerContainer>
                <Header />

                <S.StartText>
                    <h1>INNOVATION IN YOUR HANDS</h1>
                    <h2>Explore, Interact and Transform the Real Estate Market with Our Smart Interactive Table.</h2>

                    <div className="startButton">
                        <span className='text'>START EXPERIENCE</span>
                        <button className='start'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </S.StartText>

                <LandingFooter />
            </S.InnerContainer>

            
        </S.OuterContainer>
    )
}

export default Home