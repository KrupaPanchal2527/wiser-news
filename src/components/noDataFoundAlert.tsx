import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const NoDataAlert: React.FC = () => {
  return (
    <Alert
      status="info"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        No matching data found.
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Try searching with relevent keywords like Latest, Tech, Hot-News. Make
        sure no filters are applied.
      </AlertDescription>
    </Alert>
  );
};

export default NoDataAlert;
