import { useContext } from "react";
import { AppContext } from "./context";
import PageUI from "./pageUI";

function Nabejaei() {
  const { setResult, setError, info, func } = useContext(AppContext);

  function calculate(e) {
    e.preventDefault();

    let a = Math.min(info.range1, info.range2);
    let b = Math.max(info.range1, info.range2);
    let c;
    let fa = func(a);
    let fb = func(b);
    let condition = 10 ** info.condition;
    let decimal = info.decimal;

    for (let i = 0; i < 1000; i++) {
      setError(false);
      if (fa * fb > 0) {
        setError(true);
        setResult(0);
        break;
      }
      c = (a * fb - b * fa) / (fb - fa);
      let fc = func(c);
      let res = c.toFixed(decimal);
      setResult(res);
      if (Math.abs(fc) < condition) {
        break;
      }
      if (fa * fc < 0) {
        b = c;
        fb = fc;
      } else if (fa * fc > 0) {
        a = c;
        fa = fc;
      }
    }
  }

  return <PageUI name="نابجایی" calculate={calculate} />;
}

export default Nabejaei;
