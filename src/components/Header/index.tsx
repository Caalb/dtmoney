import { useState } from "react";
import Modal from 'react-modal'
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";


interface HeaderProps {
  onOpenNewTransactionModa: () => void;
}

export function Header({onOpenNewTransactionModa}: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={onOpenNewTransactionModa}>
          Nova transação
        </button>

        
      </Content>
    </Container>
  );
}
