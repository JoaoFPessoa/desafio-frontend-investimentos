import { Container } from "./styles";

export default function FormGroup({ label, children, error }) {
  return (
    <Container>
      <label>{label}</label>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}
