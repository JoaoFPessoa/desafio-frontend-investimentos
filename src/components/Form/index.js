import { useEffect, useState } from "react";
import Button from "../Buttons/FormButton";
import SubmitButton, { CleanDataButton } from "../Buttons/HandleFormButton";
import BarChart from "../Chart";
import FormGroup from "../FormGroup";
import useErrors from "../Hooks/useErrors";
import Input from "../Input";
import Results from "../Results";
import isNumber from "../utils/isNumber";
import {
  ButtonsContainer,
  Container,
  FlexRow,
  FormContainer,
  InputsContainer,
  Option,
  ResultsContainer,
  SubmitContainer,
  Title,
} from "./style";

export default function Form() {
  const [initialAport, setInitialAport] = useState("");
  const [term, setTerm] = useState("");
  const [monthlyAport, setMonthlyAport] = useState("");
  const [rentability, setRentability] = useState("");
  const [indicadores, setIndicadores] = useState([]);
  const [tipoRendimento, setTipoRendimento] = useState("");
  const [tipoIndexacao, setTipoIndexacao] = useState("");
  const [brutoRendimento, setBrutoRendimento] = useState(false);
  const [liquidoRendimento, setLiquidoRendimento] = useState(false);
  const [posIndexacao, setPosIndexacao] = useState(false);
  const [preIndexacao, setPreIndexacao] = useState(false);
  const [ipcaIndexacao, setIpcaIndexacao] = useState(false);
  const [openResults, setOpenResults] = useState(false);
  const { setError, removeError, getErrorMessageByFieldName, errors } =
    useErrors();

  //get Indicators
  useEffect(() => {
    fetch("http://localhost:3000/indicadores", {
      method: "GET",
      headers: new Headers({ "Content-type": "application/json" }),
    })
      .then(async (response) => {
        const json = await response.json();
        setIndicadores(json);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Submit & Clean Data handlers
  function handleSubmit(event) {
    event.preventDefault();
    setOpenResults(true);
  }
  function handleCleanFields(){
    setTipoRendimento("");
    setTipoIndexacao("");
    setInitialAport("");
    setMonthlyAport("");
    setTerm("");
    setRentability("");
  }
  const isValid =
    tipoRendimento &&
    tipoIndexacao &&
    initialAport &&
    monthlyAport &&
    term &&
    rentability &&
    errors.length === 0;

  // Validate form data handlers

  function handleInitialAportChange(event) {
    setInitialAport(event.target.value);
    if (event.target.value && !isNumber(event.target.value)) {
      setError({
        field: "initialAport",
        message: "Aporte deve ser um número",
      });
    } else if (!event.target.value) {
      setError({
        field: "initialAport",
        message: "Você deve preencher este campo",
      });
    } else {
      removeError("initialAport");
    }
  }
  function handleTermChange(event) {
    setTerm(event.target.value);

    if (event.target.value && !isNumber(event.target.value)) {
      setError({
        field: "term",
        message: "Prazo deve ser um número",
      });
    } else if (!event.target.value) {
      setError({
        field: "term",
        message: "Este campo deve ser preenchido",
      });
    } else {
      removeError("term");
    }
  }

  function handleMonthlyAportChange(event) {
    setMonthlyAport(event.target.value);

    if (event.target.value && !isNumber(event.target.value)) {
      setError({
        field: "monthlyAport",
        message: "Prazo deve ser um número",
      });
    } else if (!event.target.value) {
      setError({
        field: "monthlyAport",
        message: "Campo deve ser preenchido",
      });
    } else {
      removeError("monthlyAport");
    }
  }

  function handleRentabilityChange(event) {
    if (event.target.value && !isNumber(event.target.value)) {
      setError({
        field: "rentability",
        message: "Rentabilidade deve ser um número",
      });
    } else if (!event.target.value) {
      setError({
        field: "rentability",
        message: "Você deve preencher este campo",
      });
    } else {
      removeError("rentability");
      setRentability(event.target.value);
    }
  }
  //Handle Buttons para definir valores e background (tipoRendimento)
  function handleTipoRendimentoBruto() {
    setTipoRendimento("bruto");
    setBrutoRendimento(true);
    setLiquidoRendimento(false);
  }
  function handleTipoRendimentoLiquido() {
    setTipoRendimento("liquido");
    setLiquidoRendimento(true);
    setBrutoRendimento(false);
    console.log(tipoRendimento);
  }
  //Handle para definir valores e background (tipoIndexação)
  function handleTipoIndexacaoPre() {
    setPreIndexacao(true);
    setPosIndexacao(false);
    setIpcaIndexacao(false);
    setTipoIndexacao("pre");
  }
  function handleTipoIndexacaoPos() {
    setPreIndexacao(false);
    setPosIndexacao(true);
    setIpcaIndexacao(false);
    setTipoIndexacao("pos");
  }

  function handleTipoIndexacaoFixado() {
    setPreIndexacao(false);
    setPosIndexacao(false);
    setIpcaIndexacao(true);
    setTipoIndexacao("ipca");
  }
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Simulador</Title>
        <ButtonsContainer>
          <Option>
            <h3>Rendimento *</h3>
            <div>
              <Button
                title="Bruto"
                type="button"
                borderChoice="left"
                onClick={handleTipoRendimentoBruto}
                value={tipoRendimento}
                selected={brutoRendimento}
              />
              <Button
                title="Líquido"
                type="button"
                borderChoice="right"
                onClick={handleTipoRendimentoLiquido}
                value={tipoRendimento}
                selected={liquidoRendimento}
              />
            </div>
          </Option>
          <Option>
            <h3>Tipos de Indexação *</h3>
            <div>
              <Button
                title="PRÉ"
                type="button"
                borderChoice="left"
                onClick={handleTipoIndexacaoPre}
                selected={preIndexacao}
                value={tipoIndexacao}
              />
              <Button
                title="PÓS"
                type="button"
                onClick={handleTipoIndexacaoPos}
                selected={posIndexacao}
                value={tipoIndexacao}
              />
              <Button
                title="FIXADO"
                type="button"
                borderChoice="right"
                onClick={handleTipoIndexacaoFixado}
                selected={ipcaIndexacao}
                value={tipoIndexacao}
              />
            </div>
          </Option>
        </ButtonsContainer>
        <InputsContainer>
          <div>
            <FormGroup
              label="Aporte Inicial *"
              error={getErrorMessageByFieldName("initialAport")}
            >
              <Input
                name="Aporte Inicial"
                onChange={handleInitialAportChange}
                error={getErrorMessageByFieldName("initialAport")}
                value={initialAport}
              />
            </FormGroup>

            <FormGroup
              label="Prazo (em meses) *"
              error={getErrorMessageByFieldName("term")}
            >
              <Input
                name="Prazo"
                onChange={handleTermChange}
                error={getErrorMessageByFieldName("term")}
                value={term}
              />
            </FormGroup>

            <FormGroup label="IPCA (ao ano)">
              <Input name="Ipca" value={indicadores[1]?.valor + "%"} />
            </FormGroup>
          </div>
          <div>
            <FormGroup
              label="Aporte Mensal *"
              error={getErrorMessageByFieldName("monthlyAport")}
            >
              <Input
                name="AporteMensal"
                onChange={handleMonthlyAportChange}
                error={getErrorMessageByFieldName("monthlyAport")}
                value={monthlyAport}
              />
            </FormGroup>

            <FormGroup
              label="Rentabilidade *"
              error={getErrorMessageByFieldName("rentability")}
            >
              <Input
                name="Rentabilidade"
                onChange={handleRentabilityChange}
                error={getErrorMessageByFieldName("rentability")}
                value={rentability}
              />
            </FormGroup>

            <FormGroup label="CDI (ao ano)" error>
              <Input name="CDI" value={indicadores[0]?.valor + "%"} />
            </FormGroup>
          </div>
        </InputsContainer>
        <SubmitContainer>
          <CleanDataButton title="Limpar Campos" 
          type="button" 
          onClick={handleCleanFields} />
          <SubmitButton
            title="Simular"
            type="button"
            disabled={!isValid}
            onClick={handleSubmit}
          />
        </SubmitContainer>
      </FormContainer>
      <Results
        tipoRendimento={tipoRendimento}
        tipoIndexacao={tipoIndexacao}
        openResults={openResults}
      />
    </Container>
  );
}
