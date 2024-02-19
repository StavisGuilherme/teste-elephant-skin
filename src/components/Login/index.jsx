import * as S from "./styles";

import { loginImage, logoLogin } from "../../assets";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import { TransparentButton, LargeButton } from "../UI";

const Login = () => {
  return (
    <S.OuterContainer>
      <S.ImageContainer>
        <img src={loginImage} />
        <img src={logoLogin} className="logo" />
      </S.ImageContainer>

      <S.TextContainer>
        <div className="content">
          <h1>ACCESS THE PLATAFORM</h1>
          <h2>
            Access as a spectator by clicking let me in or log in as a broker
          </h2>
        </div>

        <div className="form">
          <div className="guest">
            <h3>JOIN AS GUEST</h3>
            <div className="border" />

            <Link to={`home`}>
              <TransparentButton width={"120px"} height={"48px"}>
                LET ME IN
              </TransparentButton>
            </Link>
          </div>

          <div className="spacer"></div>

          <div className="broker">
            <h3>I&#39;M A BROKER</h3>
            <div className="border" />

            <input type="text" name="email" placeholder="Type your e-mail" />
            <input
              type="text"
              name="password"
              placeholder="Type your password"
            />
            <Link to={`home`}>
              <LargeButton width={"100%"}>
                Login <FontAwesomeIcon icon={faArrowRight} />
              </LargeButton>
            </Link>
          </div>

          <div className="create">
            <span>
              Don&#39;t have an account? <a href="#">Create new account</a>
            </span>
          </div>
        </div>
      </S.TextContainer>
    </S.OuterContainer>
  );
};

export default Login;
