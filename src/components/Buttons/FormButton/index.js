import { FormButton } from "./style";

export default function Button({
  title,
  onClick,
  type,
  borderChoice,
  selected,
  tipoIndexacao,
}) {
  return (
    <FormButton
      onClick={onClick}
      type={type}
      borderChoice={borderChoice}
      selected={selected}
      tipoIndexacao={tipoIndexacao}
    >
      {title}
    </FormButton>
  );
}
