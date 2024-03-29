import React, { useContext } from "react";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saidas.svg";
import totalImg from "../../assets/Total.svg";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

export function Summary() {

  const transactions = useContext(TransactionsContext)

  console.log(transactions)
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>

        <strong>R$17.400,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>

        <strong>R$1259,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>

        <strong>R$16.141,00</strong>
      </div>
    </Container>
  );
}
