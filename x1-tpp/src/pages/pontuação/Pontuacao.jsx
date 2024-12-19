import React from 'react'

import styles from "./Pontuacao.module.css"

import TablePoints from '../../components/table-points/TablePoints'

const Pontuacao = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header_h1}>Tabela de Pontos</h1>
      <TablePoints />
    </div>
  )
}

export default Pontuacao
