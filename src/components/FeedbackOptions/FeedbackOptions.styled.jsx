import styled from 'styled-components';

export const Button = styled.button`
  margin-right: 10px;
  width: 200px;
  height: 50px;
  color: #424040;
  background-color: #50dcff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;

  &:hover,
  &:focus {
    background-color: #90bfce;
    color: #6e6c6c;
  }
`;
