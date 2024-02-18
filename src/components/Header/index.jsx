import * as S from './styles'
import {logoHeader, logoHeaderImage} from '../../assets'
import { useState } from 'react'

const Header = () => {
    const buttons = ['HOME', 'PROJECTS', 'SALES']
    const [activeTab, setActiveTab] = useState(0)
    return (
        <S.OuterContainer>
            <div className="buttons">
                {buttons.map((button, index) => {
                    return (
                    <div key={index} style={{borderBottom: index === activeTab ? '1px solid #fff' : 'none'}}>
                        <span className='buttonHeader' onClick={() => setActiveTab(index)}>{button}</span>
                    </div>
                    )
                })}
            </div>

            <div className="logo">
                <img src={logoHeaderImage} />
                <img src={logoHeader} />
            </div>
        </S.OuterContainer>
    )
}

export default Header