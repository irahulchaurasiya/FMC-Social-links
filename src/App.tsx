import "./App.css";

const App = () => {
  return (
    <div className="bg-[hsl(0,0%,8%)] h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="rounded-lg text-[hsl(0,0%,100%)] bg-[hsl(0,0%,12%)] w-[400px] h-[500px] flex flex-col items-center justify-center">
        <img
          className="rounded-full w-[100px] my-4"
          src=" /images/avatar-jessica.jpeg"
          alt="No image available"
        />
        <h1 className="mt-2 text-2xl font">Jessica Randall</h1>
        <h3 className="text-xs mt-1 text-[hsl(75,94%,57%)]">
          London, United Kingdom
        </h3>
        <p className="mt-4 text-xs text-[hsl(0,0%,100%)]">
          "Front-end develop and avid reader."
        </p>
        <div className="flex flex-col my-4">
          <button className="buttonClass">Github</button>
          <button className="buttonClass">Frontend Mentor</button>
          <button className="buttonClass">LinkedIn</button>
          <button className="buttonClass">Twitter</button>
          <button className="buttonClass">Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default App;
