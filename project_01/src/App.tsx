import AppRouter from './components/AppRouter';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <AppRouter />
      </main>
    </>
  );
};

export default App;
