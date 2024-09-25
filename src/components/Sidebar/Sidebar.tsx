import React, { useEffect, useState } from 'react';
import {
  SidebarContainer,
  CloseButton,
  SidebarContent,
} from './Sidebar.styles';
import { fetchProviders } from '../../services/apiService';
import ProviderDetails from '../ProviderDetails/ProviderDetails'; // Import the modal component

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [apiList, setApiList] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedApiName, setSelectedApiName] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      const getProviders = async () => {
        try {
          const providers = await fetchProviders();
          setApiList(providers);
        } catch (error) {
          setError(error instanceof Error ? error.message : 'Unknown error');
        } finally {
          setLoading(false);
        }
      };

      getProviders();
    }
  }, [isOpen]);

  const handleApiClick = (apiName: string) => {
    setSelectedApiName(apiName);
    setModalIsOpen(true); // Open the modal
    onClose(); // Close the sidebar
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <SidebarContent>
          <h2>Available APIs</h2>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <ul>
            {apiList.map((apiName) => (
              <li key={apiName} onClick={() => handleApiClick(apiName)}>
                {apiName}
              </li>
            ))}
          </ul>
        </SidebarContent>
      </SidebarContainer>
      {/* Modal for provider details */}
      <ProviderDetails
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        apiName={selectedApiName}
      />
    </>
  );
};

export default Sidebar;
