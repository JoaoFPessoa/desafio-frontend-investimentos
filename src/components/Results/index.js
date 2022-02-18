import { useEffect, useState } from "react";
import BarChart from "../Chart";
import { Container, ResultsContainer, Title } from "./style";
import ValueBox from "./ValueBox";

export default function Results({
  openResults,
  tipoIndexacao,
  tipoRendimento,
  onClick,
}) {
  const [simulacoes, setSimulacoes] = useState([]);
  const [comAporte, setComAporte] = useState([]);
  const [semAporte, setSemAporte] = useState([]);
  //getSimulacoes
  useEffect(() => {
    fetch(
      `http://localhost:3000/simulacoes?tipoIndexacao=${tipoIndexacao}&tipoRendimento=${tipoRendimento}`,
      {
        method: "GET",
        headers: new Headers({ "Content-type": "application/json" }),
      }
    )
      .then(async (response) => {
        const json = await response.json();
        setSimulacoes(json);
        console.log(response);
        //Consts to pass the response object to array, and transform values to have only 2 cases after "."
        const semAporteToObject = (Object.values(json[0].graficoValores.semAporte))
        const semAporteToFixed =  semAporteToObject?.map(function(semAporte){return Number(semAporte.toFixed(1))})
        const comAporteToObject = (Object.values(json[0].graficoValores.comAporte))
        const comAporteToFixed =  comAporteToObject?.map(function(comAporte){return Number(comAporte.toFixed(1))})
        setComAporte(comAporteToFixed )
        setSemAporte(semAporteToFixed)
        console.log(comAporte )
      })
      .catch((error) => {
        console.log(error);
      });
  }, [tipoIndexacao, tipoRendimento]);
  if (!openResults) {
    return <h1></h1>;
  } else {
    return (
      <Container>
        <Title>Resultado da Simulação</Title>
        <ResultsContainer>
          <ValueBox
            title="Valor Final Bruto"
            value={"R$" + simulacoes[0]?.valorFinalBruto}
          />
          <ValueBox
            title="Alíquota do IR"
            value={"R$" + simulacoes[0]?.aliquotaIR}
          />
          <ValueBox
            title="Valor Pago em IR"
            value={"R$" + simulacoes[0]?.valorPagoIR}
          />
          <ValueBox
            title="Valor Final Líquido"
            value={"R$" + simulacoes[0]?.valorFinalLiquido}
          />
          <ValueBox
            title="Valor Total Investido"
            value={"R$" + simulacoes[0]?.valorTotalInvestido}
          />
          <ValueBox
            title="Ganho Líquido"
            value={"R$" + simulacoes[0]?.ganhoLiquido}
          />
           <BarChart
           comAporte = {comAporte}
           semAporte = {semAporte}/>
        </ResultsContainer>
       
      </Container>
    );
  }
}
