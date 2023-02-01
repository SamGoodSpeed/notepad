import "./App.css";
import styles from "./styles";
import AsideMenu from	"./components/AsideMenu"
function App() {
  return (
    <div className={`app ${styles.app}`}>
      <div className={`${styles.container}`}>
        <header className="hidden"></header>
        <AsideMenu/>
        <main>
          <section></section>
          <section></section>
          <section></section>
        </main>
      </div>
    </div>
  );
}

export default App;
