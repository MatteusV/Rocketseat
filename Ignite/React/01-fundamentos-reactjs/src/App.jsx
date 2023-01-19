import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      
        <Sidebar />

        <main>
          <Post 
            author="Matteus Varlesse"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quas quidem facere optio fugiat atque veritatis ab sapiente inventore eos nostrum explicabo, velit hic, rem maxime error perferendis, cumque earum." 
          />
          <Post 
            author="Matteus"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quas quidem facere optio fugiat atque veritatis ab sapiente inventore eos nostrum explicabo, velit hic, rem maxime error perferendis, cumque earum." 
          />
        </main>
      
      </div>
    </div>
  )
}


