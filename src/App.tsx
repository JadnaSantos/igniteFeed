import "./styles/global.css";
import styles from './App.module.css';
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";


const posts = [
  {
    id: 1,
    author: {
      avatar: "https://github.com/diego3g.png",
      name: 'Diego Fernandes',
      role: 'CTO'
    },
    content: [
      {type: 'paragraph', content: 'Hey guys'},
      {type: 'paragraph', content: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque'},
      {type: 'paragraph', content: 'est rerum tempore vitae'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatar: "https://github.com/JadnaSantos.png",
      name: 'Jadna Santos',
      role: 'Desenvolvedora Junior'
    },
    content: [
      {type: 'paragraph', content: 'Hey Everyone'},
      {type: 'paragraph', content: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque'},
      {type: 'paragraph', content: 'est rerum tempore vitae'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 3,
    author: {
      avatar: "https://github.com/JadnaSantos.png",
      name: 'Carlos Santos',
      role: 'Desenvolvedora Junior'
    },
    content: [
      {type: 'paragraph', content: 'Hey people'},
      {type: 'paragraph', content: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque'},
      {type: 'paragraph', content: 'est rerum tempore vitae'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  }
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </>
  );
}

export default App;
