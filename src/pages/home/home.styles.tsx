import styled from "styled-components";

export const HomeWrapper = styled.div`
  height: 100vh;
  max-width: 1300px;
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const HomeHeaderWrapper = styled.div`
  display: flex;
  padding: 26px 0;
  justify-content: space-between;
  align-items: center;
`;

export const HomeHeaderButton = styled.div`
  .log-button {
    width: 100px;
    margin-left: 20px;
  }
`;

export const HomeBodyWrapper = styled.div`
  padding: 50px 0;
`;

export const HomeSubscribeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  h3 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  p {
    a {
      font-size: 18px;
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      margin-right: 20px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HomeAnouncementWrapper = styled.div`
  margin: 80px 0;
  text-align: center;
  & > h1 {
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  & > p {
    font-size: 20px;
    max-width: 768px;
    margin: auto;
    margin-bottom: 20px;
  }
  .home-button {
    width: 240px;
    height: 60px;
  }
`;

export const SubscribeInputWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  input {
    flex: 1;
    padding: 0 12px;
    transition: all 0.2s ease-in;
    outline: none;
    color: ${({ theme }) => theme.input.text};
    border: none;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.input.border};
    background: ${({ theme }) => theme.input.bg};
    border-radius: 6px 0 0 6px;
  }
  button {
    outline: none;
    transition: all 0.2s ease-in;
    border: none;
    border-radius: 0 6px 6px 0;
    width: 50px;
    background-color: #5538c9;
    color: white;
    font-size: 16px;
  }
`;

export const AnounceGridWrapper = styled.div`
  margin-top: 80px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  & > div {
    display: flex;
    font-size: 20px;
    text-align: left;
    p {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const HomeVideoWrapper = styled.div`
  video {
    width: 100%;
  }
`;
