import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Avatar = styled.img`
  border-radius: 20%;
`;

export const Text = styled.span`
  font-weight: 700;
  color: white;
  font-size: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  width: 80px;
  padding: 6px;
  border-radius: 8px;
  border-color: #fff;
  font-size: 17px;
  cursor: pointer;
  color: white;
  background-color: lightgray;
  transition: transform 250ms linear, box-shadow 250ms linear;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
