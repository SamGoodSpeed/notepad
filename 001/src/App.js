import "./App.css";
import styles from "./styles";
import AsideMenu from	"./components/AsideMenu"
import ChangeSection from "./components/ChangeSection";
function App() {
  return (
    <div className={`app ${styles.app} font-mono`}>
      <div className={`${styles.container}`}>
        <header className="hidden"></header>
        <AsideMenu/>
        <main className="w-full">
					<ChangeSection/>
          <section id="start_section" className={`${styles.flexCenter} flex-col justify-center h-screen`}>
						<h2 className="text-white text-4xl  font-extrabold">Hello World</h2>
						<p className="text-gray-500">Your personal AI Note</p>
					</section>
          <section id="start_section2" className={`${styles.flexCenter} flex-col justify-center h-screen hidden`}>
						<h2 className="text-white text-4xl  font-extrabold">Hello World</h2>
						<p className="text-gray-500">Your personal AI Note</p>
					</section>
          <section></section>
          <section></section>
        </main>
      </div>
    </div>
  );
}

export default App;
