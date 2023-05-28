import Sidebar from './components/Sidebar';

const planComponents = ['Flight Info', 'Route', 'Weight and Balance', 'Fuel'];

function App() {
  return (
    <div className="flex flex-row h-screen items-stretch justify-start w-screen">
      <Sidebar components={planComponents} />
    </div>
  );
}

export default App;
