import { logoSVG } from '../../assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import * as S from './styles'

const LandingLogo = ({setClicked}) => {
    
    return (
        <S.OuterContainer>
            <img src={logoSVG}/>
            
            <S.TextContainer>
                <span>START EXPERIENCE</span>

                <S.Button 
                onClick={() => setClicked(true)}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </S.Button>

            </S.TextContainer>
        </S.OuterContainer>
    )
}



export default LandingLogo