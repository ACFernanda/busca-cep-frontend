import styled from "styled-components";

export default function AddressBox({data}) {
  return (
    <Container>
      <p>{data.address}</p>
      <p>{data.district}, {data.city} - {data.state}</p>
      <p>CEP: {data.code}</p>
    </Container>
  );
}

const Container = styled.div`
  background: #FAFAFA;
  margin-top: 50px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px -1px 22px 10px rgba(0,65,134,0.46);

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #004186;
    line-height: 26px;
  }
`