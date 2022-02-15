import { Container, Title, Value } from "./style";

export default function ValueBox({ title, value }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Container>
  );
}
