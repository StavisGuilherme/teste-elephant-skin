import { LandingLogo, LandingFooter, Login} from "../../components"
import * as S from './styles'
import { useState } from "react"

const LandingPage = () => {
    const [clicked, setClicked] = useState(false)

    return (
    <S.OuterContainer>
        <div></div>
        
        <S.CenterContainer>
            {clicked ? (<Login />) : (<LandingLogo setClicked={setClicked} />)}
        </S.CenterContainer>

        <LandingFooter />
    </S.OuterContainer>
    )
}

export default LandingPage