import styled from "styled-components";
import { useState } from "react";
import InputMask from "react-input-mask";

import { getAddress } from "../services/api";
import AddressBox from "../Components/AddressBox"

export default function CepSearch() {
  const [cep, setCep] = useState(null);
  const [address, setAddress] = useState(null);
  const [disabled, setDisabled] = useState(false);

  async function searchCEP(event) {
    event.preventDefault();

    try {
      setDisabled(true)
      const resultAddress = await getAddress(cep);
      const addressInfo = resultAddress.data;
      setAddress(addressInfo);
    } catch (error) {
      alert(`Por favor, tente novamente. ${error.response.data}.`);
      setDisabled(false);
    }
  }

  function formatCEP(cep){
    return cep.replace(/-/i, '')
  }

  return (
    <Container disabled={disabled}>
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
          disabled={disabled}
          onChange={(e) => setCep(formatCEP(e.target.value))}/><br />
        <button 
          id="submit" 
          type="submit" 
          disabled={disabled}>
            Entrar
        </button>
        <button className="clear" type="Reset" onClick={() => (setAddress(null), setDisabled(false))}>Limpar</button>
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
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .clear {
    color: #144D73;
    background: none;
    border: none;
  }

  #submit {
    background: ${(props) => props.disabled ? "#A1CBE3" : "#1C6EA4"};
  }
  `