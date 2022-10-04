import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  /* @media screen and (max-width: 375px) {
    column-gap:0;
    row-gap:0;
  } 
  @media screen and (max-width: 425px) {
    margin-left: 18px;
  } */
  @media screen and (max-width: 768px) {
    margin-left: 40px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    margin-left: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
