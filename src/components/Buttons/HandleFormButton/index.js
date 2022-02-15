import { CleanDataButtonStyle, SubmitButtonStyle } from "./style";

export default function SubmitButton({ title, onClick, type, disabled }) {
  return (
    <SubmitButtonStyle onClick={onClick} type={type} disabled={disabled}>
      {title}
    </SubmitButtonStyle>
  );
}

export function CleanDataButton({ title, onClick, type }) {
  return (
    <CleanDataButtonStyle title={title} onClick={onClick} type={type}>
      {title}
    </CleanDataButtonStyle>
  );
}
