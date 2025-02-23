import Header from "./components/Header";
import SendMessage from "./components/SendMessage";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";


function App() {
  return (
    <div className="min-h-screen w-full rounded-2xl relative">
      <div className="bg-custom-gradient-top w-full h-[388px] lg:h-[488px] absolute top-0 left-0 -z-10 bg-primary" />
      <div className="bg-custom-gradient-bottom w-full h-[calc(100%-388px)] lg:h-[calc(100%-488px)] absolute top-[388px] lg:top-[488px] left-0 -z-10 bg-[#212127]" />
      <div className="py-3 px-4 flex flex-col z-20">
        <Header />
        <main className="flex-1 pt-4 mb-28 flex flex-col gap-3">
          <SendMessage />
          <MainContent />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
