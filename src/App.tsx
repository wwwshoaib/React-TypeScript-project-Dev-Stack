import { Suspense } from "react";
import { ToastContainer } from "react-toastify/unstyled";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Technologies from "./components/Technologies/Technologies";
import type { TechTypeProps } from "./Type/TechType";
import Footer from "./components/Footer/Footer";

function App() {
  const loadTechnologies = async (): Promise<TechTypeProps[]> => {
    const response = await fetch("/TechData.json");

    if (!response.ok) {
      throw new Error("Failed to load technologies");
    }

    return response.json() as Promise<TechTypeProps[]>;
  };

  
  const techPromise = loadTechnologies();

  return (
    <>
      <Nav />

      <Banner />

      <Suspense
        fallback={
          <div className="flex min-h-72 items-center justify-center">
            <p className="text-lg font-semibold text-purple-600">
              Loading technologies...
            </p>
          </div>
        }
      >
        <Technologies techPromise={techPromise} />
      </Suspense>

      <Footer></Footer>




      <ToastContainer />
    </>
  );
}

export default App;