import { useState } from "react";

export default function CompoundCalculator({ onResult }) {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);

    const final = P * Math.pow(1 + r, t);
    const profit = final - P;

    onResult({ P, r, t, final, profit });
  };

  return (
    <div className="bg-white/20 p-4 rounded-2xl shadow mb-6">
      <h2 className="text-2xl font-semibold mb-3">Calculadora</h2>

      <input className="w-full p-2 rounded mb-2 text-black" placeholder="Valor Inicial"
        value={principal} onChange={e=>setPrincipal(e.target.value)} />

      <input className="w-full p-2 rounded mb-2 text-black" placeholder="Taxa (%)"
        value={rate} onChange={e=>setRate(e.target.value)} />

      <input className="w-full p-2 rounded mb-2 text-black" placeholder="Períodos"
        value={time} onChange={e=>setTime(e.target.value)} />

      <button onClick={calculate}
        className="w-full bg-yellow-400 text-black p-2 rounded-xl font-bold">
        Calcular
      </button>
    </div>
  );
}
