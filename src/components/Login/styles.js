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

  animation: animate 2s;

  background-color: #00000085;

  width: 1033px;
  padding: 48px;
  border-radius: 8px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
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
`;

export const TextContainer = styled.div`
  width: 400px;

  display: flex;
  flex-flow: column nowrap;

  .content {
    height: 104px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 48px;

    h1 {
      font-family: "Open Sans";
      font-size: 32px;
      font-weight: 400;
      line-height: 44px;
      letter-spacing: 0.03em;
      text-align: left;
    }

    h2 {
      font-family: "Open Sans";
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  .form {
    color: #f6f6f6;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;

    button {
      font-family: AauxProBold;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0.04em;
      padding: 15px 25px;
      border-radius: 1000px;
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
    }

    .guest {
      button {
        text-align: left;
        color: #f6f6f6;
        background-color: #00000020;
        box-shadow: inset 1px 1px 5px 1px #ffffff32;
      }
    }

    .spacer {
      width: 100%;
      height: 1px;
      background: linear-gradient(to right, #fff, #000);
      margin: 32px 0;
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
        margin-bottom: 16px;
        color: white;
        outline: none;
        box-shadow: inset 1px 1px 5px 1px #ffffff32;

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

        button {
          text-align: center;
          background-color: #fff;
          color: #000;
          width: 100%;
        }
      }
    }

    .create {
      width: 100%;
      margin-top: 32px;

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
        }
      }
    }
  }
`;
