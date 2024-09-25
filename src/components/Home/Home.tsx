// src/components/Home/Home.tsx
import React, { useState } from 'react';
import { Container, Title, ExploreButton } from './Home.styles';
import Sidebar from '../Sidebar/Sidebar';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleExplore = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Container>
      <Title>Explore Web APIs</Title>
      <ExploreButton onClick={handleExplore}>Explore Web APIs</ExploreButton>
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </Container>
  );
};

export default Home;
