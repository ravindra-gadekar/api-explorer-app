import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {
  ModalContent,
  CloseButton,
  Heading,
  Title,
  Description,
  UrlLink,
} from './ProviderDetails.styles';
import { fetchProviderDetails } from '../../services/apiService'; // Import the function

// Define the structure of the provider details you expect from the API
interface ProviderDetails {
  title: string;
  description: string;
  swaggerUrl: string;
  email: string;
  name: string;
  url: string;
  // Add other relevant fields based on the API response
}

interface ProviderDetailsProps {
  isOpen: boolean;
  onRequestClose: () => void;
  apiName: string;
}

const ProviderDetails: React.FC<ProviderDetailsProps> = ({
  isOpen,
  onRequestClose,
  apiName,
}) => {
  const [providerDetails, setProviderDetails] =
    useState<ProviderDetails | null>(null); // Use specific type instead of 'any'
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProviderDetails = async () => {
      if (isOpen) {
        setLoading(true);
        setError(null);
        try {
          const details = await fetchProviderDetails(apiName);
          setProviderDetails(details);
        } catch (err) {
          setError(
            err instanceof Error
              ? err.message
              : 'Failed to fetch provider details'
          );
        } finally {
          setLoading(false);
        }
      }
    };

    getProviderDetails();
  }, [isOpen, apiName]); // Dependency on isOpen and apiName

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Provider Details"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          padding: '10px 50px 60px 50px',
          width: 'max-content',
          height: 'max-content',
          background: 'rgb(20 18 18)',
        },
      }}
    >
      <ModalContent>
        <CloseButton onClick={onRequestClose}>Explore More APIs</CloseButton>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {providerDetails && (
          <>
            <Title>{providerDetails.title}</Title>
            <Heading>Description</Heading>
            <Description>{providerDetails.description}</Description>
            <Heading>SwaggerUrl</Heading>
            <UrlLink href={providerDetails.swaggerUrl} target="_blank">
              {providerDetails.swaggerUrl}
            </UrlLink>
            <Heading>Contact</Heading>
            <Description>Email: {providerDetails.email}</Description>
            <Description>Name: {providerDetails.name}</Description>
            <UrlLink>Url: {providerDetails.url}</UrlLink>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProviderDetails;
