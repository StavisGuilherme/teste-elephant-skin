import styled from "styled-components";

export const OuterContainer = styled.div`
  height: 80px;
  width: 1216px;
  padding: 0 32px 0 22px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid #ffffff32;

  @media (max-height: 720px) {
    height: 64px;
  }

  @media (max-width: 430px) {
    width: 100%;
    justify-content: center;
    padding: 0 0 0 30px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 30px;

    div {
      margin-right: 23px;
      border-bottom: 1px solid #fff;
      padding-bottom: 27px;

      @media (max-height: 720px) {
        padding-bottom: 10px;
      }

      :hover {
        cursor: pointer;
      }
    }

    .buttonHeader {
      font-family: AauxProBlackSC;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0.03em;
      text-align: left;
      color: #fff;
      margin: 0;
    }
  }

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 430px) {
      display: none;
    }

    .logoImg {
      @media (max-height: 720px) {
        width: 36px;
      }
    }

    .logoText {
      width: 200px;
    }
  }
`;
