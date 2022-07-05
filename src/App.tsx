import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModelOpen, setIsNewTransactionModelOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModelOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModelOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModa={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal 
        isOpen={isNewTransactionModelOpen} 
        onRequestClose={handleCloseNewTransactionModal}>
          <h2>Cadastrar transação</h2>
        </Modal>
      <GlobalStyle />
    </>
  );
}

