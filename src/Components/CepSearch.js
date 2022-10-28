import styled from "styled-components";
import { useState } from "react";
import InputMask from "react-input-mask";

import { getAddress } from "../services/api";
import AddressBox from "../Components/AddressBox"

export default function CepSearch() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);

  async function searchCEP(event) {
    event.preventDefault();

    try {
      const resultAddress = await getAddress(cep);
      const addressInfo = resultAddress.data
      console.log(addressInfo)

    } catch (error) {
      alert(`Por favor, tente novamente. ${error.response.data}`);
    }
  }

  function formatCEP(cep){
    return cep.replace(/-/i, '')
  }

  return (
    <Container>
      <form onSubmit={searchCEP}>
        <label htmlFor="cep">CEP</label><br />
        <InputMask 
          id="cep" 
          name="cep" 
          placeholder="00000-000" 
          required 
          mask="99999-999" 
          maskPlaceholder={null} 
          pattern="[0-9]{5}-[0-9]{3}" 
          onChange={(e) => setCep(formatCEP(e.target.value))}/><br />
        <button type="submit">Enviar</button>
        <button className="clear" type="Reset" onClick={() => setAddress(null)}>Limpar</button>
      </form>
      {address !== null ? <AddressBox data={address}/> : <></>}
    </Container>  
  );
}

const Container = styled.div`
  height: 100vh;
  padding-top: 60px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    font-size: 18px;
    line-height: 28px;
    padding-left: 5px;
  }

  label {
    color: #54514F;
    font-size: 20px;
    line-height: 26px;
    padding-left: 5px;
  }

  button {
    width: 100px;
    height: 35px;
    margin: 10px 10px 0 0;
    font-size: 18px;
    color: #F0F0F0;
    background: ${(props) => props.disabled ? "green" : "#1C6EA4"};
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .clear {
    color: #144D73;
    background: none;
    border: none;
  }
`