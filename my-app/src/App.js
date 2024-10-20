import css from './App.module.css';
import NestingComponents from './components/NestingComponents';

function App() {
  return (
    <div className={css.App}>
      <NestingComponents />
    </div>
  );
}

export default App;