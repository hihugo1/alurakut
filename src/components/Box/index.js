import styled from "styled-components";

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  margin: 0 0 8px 0;
  padding: 16px;


  .boxLink{
      font-size: 14px;
      color: #2E2884;
      text-decoration: none;
      font-weight: 800;
  }


  .subTitle{
    font-size: 32px;
    font-weight: 400;
    margin: 0 0 20px 0;
}

    .subTitle{
        font-size: 18px;
        font-weight: 400;
        margin: 0 0 20px 0;
    }

    .smallTitle{
        margin: 0 0 20px;
        font-size: 16px;
        font-weight: 700;
        color: #333;
    }

  hr{
      margin: 12px 0 8px 0;
      border-color: transparent;
      border-botom-color: #ECF2FA;
  }


  input{
      width: 100%;
      background-color: #F4F4F4;
      color: #333;
      border: 0;
      padding: 14px 16px;
      margin: 0 0 14px 0;
      border-radius: 10000px;
      ::placeholder {
          color: #333;
          opacity: 1;
      }
  }

  button {
      border: 0;
      padding: 8px 12px;
      color: #fff;
      border-radius: 10000px;
      background-color: #6F92BB
  }

  `;

export default Box;