

import styles from "./TablePoints.module.css"

const data = [
    {
        id: 1,
        nome: "Brenno Leite Paterno",
        jogos: 3,
        vitorias: 2,
        derrotas: 1,
    },
    {
        id: 2,
        nome: "Herison Wells",
        jogos: 3,
        vitorias: 2,
        derrotas: 1,
    },
    {
        id: 3,
        nome: "Philipe Satânico",
        jogos: 3,
        vitorias: 2,
        derrotas: 1,
    },
    {
        id: 4,
        nome: "Manso Manso Manso",
        jogos: 3,
        vitorias: 2,
        derrotas: 1,
    },
]

const TablePoints = () => {
  return (
    <table>
        <thead className={styles.table_head}>
            <tr className={styles.header_table_row}>
                <th>Classificação</th>
                <th>Jogos</th>
                <th>Vitórias</th>
                <th>Derrotas</th>
            </tr>
        </thead>
        <tbody>
            {data.map((person) => (
                <tr key={person.id} className={styles.tr_body}>
                    <td>{person.nome}</td>
                    <td>{person.jogos}</td>
                    <td>{person.vitorias}</td>
                    <td>{person.derrotas}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default TablePoints
