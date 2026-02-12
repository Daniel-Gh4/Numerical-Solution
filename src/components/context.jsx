import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [result, setResult] = useState(0);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState({
    equation: "",
    range1: "",
    range2: "",
    decimal: "",
    condition: "",
    x0: "",
    x1: "",
  });

  function handleChange(e) {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  }

  function func(i) {
    const f = new Function(
      "x",
      `return ${info.equation
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/−/g, "-")
        .replace(/≤/g, "<=")
        .replace(/≥/g, ">=")
        .replace(/≠/g, "!=")
        .replace(/π/g, "Math.PI")
        .replace(/\^/g, "**")
        .replace(/\bp\b/g, "Math.PI")
        .replace(/\be\b/g, "Math.E")
        .replace(/\bsin\b/g, "Math.sin")
        .replace(/\bcos\b/g, "Math.cos")
        .replace(/\btan\b/g, "Math.tan")
        .replace(/\bcot\b/g, "1/Math.tan")
        .replace(/e\^\(([^)]+)\)/g, "Math.exp($1)")
        .replace(/e\^([a-zA-Z0-9_]+)/g, "Math.exp($1)")}`,
    );
    return f(i);
  }

  function fancDerivative(i) {
    const h = 1e-5;
    return (func(i + h) - func(i - h)) / (2 * h);
  }

  return (
    <AppContext.Provider
      value={{
        result,
        setResult,
        error,
        setError,
        info,
        handleChange,
        func,
        fancDerivative,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
