import { useState } from "react"
import TemplatePL from "./pages/templatePL"
import TemplateEN from "./pages/templateEN"
import PL from "./img/PL.png"
import GB from "./img/GB.png"

function App() {
  const [language, setLanguage] = useState("EN")


  return (
    <>
      <div className="flex items-center justify-center border-indigo-400 border-y-2">
        <img
          src={PL}
          alt="flag of poland"
          className="h-12 transition duration-300 border border-gray-200 cursor-pointer hover:scale-110"
          onClick={() => setLanguage("PL")}
        />
        <h1>{language === "PL" ? "Projekty osobiste" : "Personal projects"}</h1>
        <img
          src={GB} 
          alt="flag of great britain"
          className="h-12 transition duration-300 border border-gray-200 cursor-pointer hover:scale-110"
          onClick={() => setLanguage("EN")}
        />
      </div>
      {language === "PL" ?
        <TemplatePL />
        :
        <TemplateEN />
      }
    </>
  );
}

export default App;
