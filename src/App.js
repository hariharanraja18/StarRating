import Star from "./Star";


function App() {
  return (
    <div className="h-screen">
      <h1 className="font-bold text-center text-xl">Star Rating Project</h1>
      <Star noOfStars={5}/>
    </div>
  );
}

export default App;
