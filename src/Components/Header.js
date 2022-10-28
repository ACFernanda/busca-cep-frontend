import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <p>BUSCA CEP</p>
    </Container>
  );
}

const Container = styled.div`
  height: 150px;
  background: linear-gradient(to bottom, #004186 0%, #1B699C 73%, #004186 100%);
  box-shadow: -1px 5px 15px 7px rgba(0,0,0,0.27);

  p {
    font-family: 'Kanit', sans-serif;
    color: #F0F0F0;
    font-size: 32px;
    font-weight: 600;
    padding: 60px 0 0 45px; 
  }
`

