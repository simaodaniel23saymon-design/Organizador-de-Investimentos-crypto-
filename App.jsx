import { useState } from "react";
import CompoundCalculator from "./CompoundCalculator";
import Results from "./Results";
import CalendarAlarm from "./CalendarAlarm";

export default function App() {
  const [results, setResults] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Calculadora de Juros Compostos
      </h1>

      <CompoundCalculator onResult={setResults} />
      {results && <Results data={results} />}
      <CalendarAlarm />

      <footer className="text-center mt-10 opacity-80">
        Direitos Reservados — Grana Sem Terno
      </footer>
    </div>
  );
}
