import * as S from "./styles";
import {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  linha,
  help,
  logout,
} from "../../assets";
import { Link } from "react-router-dom";

const SideBar = () => {
  const icons = [first, second, third, fourth, fifth, sixth];
  return (
    <S.OuterContainer>
      <div></div>
      <div className="buttons">
        {icons.map((icon, index) => {
          return (
            <div className="unit" key={index}>
              <div className="button" onClick={() => {}}>
                <img src={icon} />
              </div>
              {index !== 5 && <img src={linha} className="line" />}
            </div>
          );
        })}
      </div>

      <div className="control">
        <img src={help} />
        <Link to={`/`}>
          <img src={logout} />
        </Link>
      </div>
    </S.OuterContainer>
  );
};

export default SideBar;
