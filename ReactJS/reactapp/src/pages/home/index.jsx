import './style.css'
import {Card} from '../../components/card/index'

export function Home() {
  return (
    // <>
    // OU
    <div className='container'> 
      <h1>Lista de presença</h1>
        <input type="text" placeholder="digite o nome" />
        <button>Adicionar</button>
      
      <hr />

      <Card name="Matteus" time="10:55:25" />
      <Card name="Guilherme" time="11:20:10" />
      <Card name="Lucas" time="19:50:5" />

    </div>
    // OU
    // </> 
  )
}

