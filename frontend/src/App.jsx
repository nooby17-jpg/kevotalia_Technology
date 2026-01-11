import { useState } from "react";
import AppRouter from "./router/AppRouter";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <AppRouter />
    </>
  );
}
