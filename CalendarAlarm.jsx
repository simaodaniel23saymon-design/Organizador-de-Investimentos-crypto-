import { useState } from "react";

export default function CalendarAlarm() {
  const [date, setDate] = useState("");

  const setAlarm = () => {
    alert("Alarme configurado para: " + date);
  };

  return (
    <div className="bg-white/20 p-4 rounded-2xl shadow mb-6">
      <h2 className="text-2xl font-semibold mb-3">Agenda / Alarme</h2>

      <input type="date"
        className="w-full p-2 rounded mb-2 text-black"
        value={date} onChange={e=>setDate(e.target.value)} />

      <button onClick={setAlarm}
        className="w-full bg-green-400 text-black p-2 rounded-xl font-bold">
        Activar Alarme
      </button>
    </div>
  );
}
