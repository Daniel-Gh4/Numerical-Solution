import { useContext } from "react";
import { AppContext } from "./context";
import PageUI from "./pageUI";

function Newton() {
  const { setResult, setError, info, func, fancDerivative } =
    useContext(AppContext);

  function calculate(e) {
    e.preventDefault();

    let a = Math.min(info.range1, info.range2);
    let b = Math.max(info.range1, info.range2);
    let x0 = info.x0;
    let condition = 10 ** info.condition;
    let decimal = info.decimal;
    let fa = func(a);
    let fb = func(b);
    let c1;
    let c2;
    if (!x0) {
      c1 = (a + b) / 2;
    } else {
      c1 = x0;
    }

    for (let i = 0; i < 100; i++) {
      setError(false);
      if (fa * fb > 0) {
        setError(true);
        setResult(0);
        break;
      }

      let fc = func(c1);
      let dfc = fancDerivative(c1);

      c2 = c1 - fc / dfc;

      let res = c2.toFixed(decimal);
      setResult(res);

      if (Math.abs(c1 - c2) < condition) {
        break;
      } else {
        c1 = c2;
      }
    }
  }

  return <PageUI name="نیوتن" calculate={calculate} />;
}

export default Newton;
