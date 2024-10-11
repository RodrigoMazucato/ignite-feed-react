import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rodrigomazucato.png",
      name: "Rodrigo Mazucato",
      role: "Full-Stack Developer",
    },
    content: [
      { type: "paragraph", text: "Fala galeraa 👋" },
      {
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", text: "rodrigo.design/doctorcare" },
    ],
    publishedAt: new Date("2024-10-09 12:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/joselainejrs.png",
      name: "Joselaine Romão",
      role: "UX / UI Designer",
    },
    content: [
      { type: "paragraph", text: "Fala galeraa 👋" },
      {
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", text: "josi.design/doctorcare" },
    ],
    publishedAt: new Date("2024-10-11 13:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/gustrpaz.png",
      name: "Gustavo Rezende",
      role: "Cloud Engineer",
    },
    content: [
      { type: "paragraph", text: "Fala galeraa 👋" },
      {
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", text: "gu.design/doctorcare" },
    ],
    publishedAt: new Date("2024-10-11 15:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
