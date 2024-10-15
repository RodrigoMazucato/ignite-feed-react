import { Header } from "./components/Header";
import { Post, PostProps } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import postsData from "./posts.json";
import styles from "./App.module.css";
import "./global.css";

function App() {
  const posts = postsData as PostProps[];
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post: PostProps) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={new Date(post.publishedAt)}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
