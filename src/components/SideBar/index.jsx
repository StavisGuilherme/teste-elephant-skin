import * as S from './styles'
import {first, second, third, fourth, fifth, sixth, linha, help, logout} from '../../assets'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const icons = [first, second, third, fourth, fifth, sixth]
    return (
        <S.OuterContainer>
            <div></div>
            <div className='buttons'>
                {icons.map((icon, index) => {
                    return (
                    <>
                    <div className='button' onClick={() => {}}>
                        <img src={icon} key={index}/>
                    </div>
                    {index !== 5 && (<img src={linha} key={index} className='line'/>)}
                    </>
                    )
                })}
            </div>

            <div className="control">
                <img src={help} />
                <Link to={`/`}>
                    <img src={logout}/>
                </Link>
                
            </div>
        </S.OuterContainer>
    )
}

export default SideBar