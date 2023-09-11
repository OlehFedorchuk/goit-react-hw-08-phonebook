import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 20px;
  color: darkgray;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 10px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 10px;
  border-color: #fff;
  background-color: lightgray;
  font-size: 20px;
  color: white;
  transition: transform 250ms linear, box-shadow 250ms linear;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
   
`;

