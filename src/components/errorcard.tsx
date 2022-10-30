import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const ErrorAlert = ({ err }: { err: string | null }) => {
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Error while loading data.
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        We have received the logs of the error and our team will try to resolve
        it as soon as possible. <br /> Error Info: {err}
      </AlertDescription>
    </Alert>
  );
};

export default ErrorAlert;
