import { Container, Icon, Text } from "./emptyState.styled.js";

const EmptyState = ({ text }) => {
  return (
    <Container>
      <Icon />
      <Text>{text}</Text>
    </Container>
  );
};

export default EmptyState;
