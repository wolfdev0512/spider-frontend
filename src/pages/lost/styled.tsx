import styled from "styled-components";
import { Link } from "react-router-dom";


export const Layout = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
    width: 170px;
`;

export const Text = styled.div`
    font-size: 30px;
    font-weight: 600;

`;

export const Button = styled(Link)`
    width: 300px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-weight: 600;

    background: #6548d9;
    
    border-radius: 10px;
    color: white;

    margin-top: 16px;
`;
