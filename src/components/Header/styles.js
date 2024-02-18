import styled from "styled-components";

export const OuterContainer = styled.div`
  height: 48px;
  width: 1216px;
  padding: 32px 32px 0 22px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid #ffffff32;

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      margin-right: 23px;
      border-bottom: 1px solid #fff;
      padding-bottom: 25px;

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
  }
`;
