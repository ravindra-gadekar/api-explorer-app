import styled from 'styled-components';

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? '300px' : '0')};
  transition: width 0.3s ease;
  background-color: rgb(20, 18, 18);
  color: white;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  overflow-x: hidden;
  padding-top: 60px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`;

export const SidebarContent = styled.div`
  padding: 20px;

  h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #fff;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #444;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #555;
    }

    &:active {
      background-color: #666;
    }
  }

  p {
    color: #aaa;
  }
`;
