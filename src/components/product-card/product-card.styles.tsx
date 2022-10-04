import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  @media screen and (max-width: 425px) {
    height: 230px;
  }

  @media screen and (max-width: 375px) {
    height: 200px;
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover cover;
    margin-bottom: 5px;

    @media screen and (max-width: 425px) {
      height: 200px;
    }
    @media screen and (max-width: 375px) {
      height: 175px;
    }
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 800px) {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }

    @media screen and (max-width: 425px) {
      top: 135px;

      @media screen and (max-width: 375px) {
        top: 120px;
      }
    }
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      img {
        opacity: unset;
      }
    }
    button {
      opacity: unset;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
