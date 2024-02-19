import styled from "styled-components";

export const OuterContainer = styled.div`
  width: 96px;
  height: 100vh;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  border-right: 2px solid #ffffff32;

  .buttons {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 32px;

    .unit {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;

      .button {
        :hover {
          cursor: pointer;
        }
      }

      .line {
        height: 37px;
      }
    }
  }

  .control {
    display: flex;
    flex-flow: column nowrap;

    img {
      margin-bottom: 32px;
    }
  }
`;
