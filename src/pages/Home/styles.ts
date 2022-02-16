import styled from "styled-components";
import HeaderImg from "../../assets/img/plano.png";

import { Scroll } from '../../styles/global'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${HeaderImg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: hidden;
`;

const DashboardContainer = styled.main`
  position: relative;
  width: 100%;
  max-width: 1120px;
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 2rem;
`

const Header = styled.section`
  max-width: calc(1120px - 4.5rem - var(--scroll-width)
  );
`

const Body = styled(Scroll)`
  overflow: scroll;
  overflow-x: hidden;
  height: 390px;
  padding-right: 0.5rem;
`

const Row = styled.ul`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  font-family: 'Festive';
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
  

  &+&:last-child {
    margin-bottom: 0;
  }
`

const Item = styled.li`
  display: flex;
  padding: 0.5rem;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  background-color: var(--snow);

  img {
    width: 100%; height: auto; 
  }
  #pk-name::first-letter {
    text-transform: uppercase;
  }
  
`

export const Dashboard = {
  Container: DashboardContainer,
  Header,
  Body,
  Row,
  Item
}