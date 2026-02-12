import { AppContext } from "./context";
import PageUI from "./pageUI";
import { useContext } from "react";

function DoBakhshi() {
  const { setResult, setError, info, func } = useContext(AppContext);

  function calculate(e) {
    e.preventDefault();

    let a = Math.min(info.range1, info.range2);
    let b = Math.max(info.range1, info.range2);
    let c;
    let condition = 10 ** info.condition;
    let decimal = info.decimal;

    for (let i = 0; i < 1000; i++) {
      setError(false);
      c = (a + b) / 2;
      let fa = func(a);
      let fb = func(b);
      let fc = func(c);
      if (fa * fb > 0) {
        setError(true);
        setResult(0);
        break;
      }
      let res = c.toFixed(decimal);
      setResult(res);
      if (Math.abs(fc) < condition) {
        break;
      }
      if (fa * fc < 0) {
        b = c;
      } else if (fa * fc > 0) {
        a = c;
      }
    }
  }

  return <PageUI name="دوبخشی" calculate={calculate} />;
}

export default DoBakhshi;
