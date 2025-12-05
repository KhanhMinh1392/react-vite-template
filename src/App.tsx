import ReactLogo from './assets/react.svg';
function App() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-gray-900">Hello Guys. This is React Template.</h1>
      <div className="mt-8 mb-6 flex items-center gap-4">
        <img alt="vite_logo" height={160} src="./vite.svg" width={160} />
        <p className="text-6xl">+</p>
        <img alt="react_logo" height={160} src={ReactLogo} width={160} />
      </div>
      <h1 className="text-4xl font-bold text-gray-800" onClick={() => {}}>
        Create your new project together.
      </h1>
    </main>
  );
}

export default App;
