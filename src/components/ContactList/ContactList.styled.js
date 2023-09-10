import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  justify-content: center;
  flex-direction: column;
  list-style: none;
`;

export const Item = styled.li`
  border-bottom: 1px dotted #ddd;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;

`;

export const Button = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  color: #ddd;
  font-size: 20px;
  color: red;
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2),
      inset 0px -6px 12px rgba(250, 250, 250, 0.3);
  }
`;
