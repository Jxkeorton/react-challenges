import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} />
      <EventBinding />
      <EventsClass />
      <EventsFunctional />	
      <NavBarSimple />
      <Sidebar />
    </div>
  );
}

export default App;