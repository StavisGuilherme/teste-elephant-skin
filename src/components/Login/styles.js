import styled from "styled-components";

export const OuterContainer = styled.div`
  @keyframes animate {
    from {
      margin-left: 130vw;
    }
    to {
      margin-left: 0vw;
    }
  }

  @keyframes mobile {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: animate 2s;

  background-color: #00000085;

  width: 1033px;
  padding: 48px;
  border-radius: 8px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media (max-height: 768px) and (max-width: 1366px) {
    height: 470px;
    width: 920px;
    padding: 36px;
  }

  @media (max-width: 720px) {
    width: 100%;
    padding: 24px 0;
    border-radius: 0;

    animation: mobile 2s;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  padding: 0;

  width: 514px;

  .logo {
    position: absolute;
    top: 466px;
    left: 133px;
  }

  @media (max-height: 768px) {
    width: 360px;

    img {
      width: 360px;
    }

    .logo {
      top: 296px;
      left: 50px;
      width: 260px;
    }
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  width: 400px;

  display: flex;
  flex-flow: column nowrap;

  @media (max-width: 430px) {
    width: 430px;
    align-items: center;
  }

  .content {
    height: 104px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 48px;

    @media (max-height: 768px) {
      margin-bottom: 20px;
    }

    @media (max-width: 430px) {
      width: 430px;
      align-items: center;
      height: 80px;
    }

    h1 {
      font-family: "Open Sans";
      font-size: 32px;
      font-weight: 400;
      line-height: 44px;
      letter-spacing: 0.03em;
      text-align: left;

      @media (max-height: 768px) {
        font-size: 24px;
      }

      @media (max-width: 430px) {
        font-size: 22px;
        text-align: center;
      }
    }

    h2 {
      font-family: "Open Sans";
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;

      @media (max-height: 768px) {
        font-size: 14px;
      }

      @media (max-width: 430px) {
        font-size: 14px;
        text-align: center;
      }
    }
  }

  .form {
    color: #f6f6f6;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 430px) {
      width: 400px;
      padding: 0 30px;
    }

    button {
      font-family: AauxProBold;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0.04em;
      padding: 15px 25px;
      border-radius: 1000px;

      @media (max-height: 768px) {
        font-size: 12px;
        padding: 10px 20px;
        height: 34px;
      }

      @media (max-width: 430px) {
        padding: 0 10px;
      }
    }

    h3 {
      background-color: #00000000;
      padding-bottom: 10px;
      font-family: "Open Sans";
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
    }

    .border {
      background: linear-gradient(to right, #fff, #00000000);
      padding-bottom: 1px;
      width: 134px;
      margin-bottom: 32px;

      @media (max-height: 768px) {
        margin-bottom: 20px;
      }
    }

    .spacer {
      width: 100%;
      height: 1px;
      background: linear-gradient(to right, #fff, #000);
      margin: 32px 0;

      @media (max-height: 768px) {
        margin: 20px 0;
      }
    }

    .broker {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;

      input {
        border-radius: 600px;
        padding: 16px;
        background-color: #00000020;
        border: none;
        color: white;
        outline: none;
        box-shadow: inset 1px 1px 5px 1px #ffffff32;
        margin-bottom: 16px;

        @media (max-height: 720px) {
          margin-bottom: 12px;
          padding: 12px;
        }

        @media (max-width: 430px) {
        }

        ::placeholder {
          font-family: "Open Sans";
          font-size: 14px;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 0em;
          text-align: left;
          color: #fff;
        }
      }

      a {
        margin-top: 32px;
        width: 100%;

        @media (max-height: 768px) {
          margin-top: 0;
        }
      }
    }

    .create {
      width: 100%;
      margin-top: 32px;

      @media (max-height: 768px) {
        margin-top: 16px;
      }

      span {
        font-family: "Open Sans";
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
        color: #fff;

        a {
          color: #ffe08f;

          @media (max-height: 768px) {
            margin-top: 0;
          }

          .loginButton {
            height: 100px;
          }
        }
      }
    }
  }
`;
