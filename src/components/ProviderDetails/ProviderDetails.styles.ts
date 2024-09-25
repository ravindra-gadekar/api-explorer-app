import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const CloseButton = styled.button`
  position: absolute;
  bottom: 0px;
  right: 18px;
  background-color: #ff4c4c;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 15px;
  border-radius: 50px;

  &:hover {
    background-color: #ff2c2c;
  }
`;

// Title section styling
export const Heading = styled.h2`
  color: #fff;
  margin-bottom: 0px;
  font-size: medium;
  margin-top: 20px;
`;

// Title section styling
export const Title = styled.h2`
  font-size: 2rem;
  color: #a3a3a3;
  margin-bottom: 2px;
  inline-size: 600px;
  overflow-wrap: break-word;
  overflow: hidden;
  white-space: nowrap;
`;

// Description styling
export const Description = styled.a`
  font-size: 1rem;
  color: #a3a3a3;
  margin-bottom: 2px;
  text-align: left;
  line-height: 1.5;
  inline-size: 600px;
  overflow-wrap: break-word;
  overflow: hidden;
  white-space: nowrap;
`;

// Swagger URL link styling
export const UrlLink = styled.a`
  font-size: 1rem;
  color: #1a73e8;
  text-decoration: none;
  word-wrap: break-word;
  inline-size: 600px;
  overflow-wrap: break-word;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;
