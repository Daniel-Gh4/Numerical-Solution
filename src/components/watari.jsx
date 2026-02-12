import { useContext } from "react";
import { AppContext } from "./context";
import PageUI from "./pageUI";

function Watari() {
  const { setResult, info, func } = useContext(AppContext);

  function calculate(e) {
    e.preventDefault();

    let condition = 10 ** info.condition;
    let decimal = info.decimal;
    let c1 = Math.min(info.x0, info.x1);
    let c2 = Math.max(info.x0, info.x1);
    let c3;

    for (let i = 0; i < 100; i++) {
      let fc1 = func(c1);
      let fc2 = func(c2);

      c3 = (c1 * fc2 - c2 * fc1) / (fc2 - fc1);
      let fc3 = func(c3);

      let res = c3.toFixed(decimal);
      setResult(res);

      if (Math.abs(fc3) < condition) {
        break;
      } else {
        c1 = c2;
        c2 = c3;
      }
    }
  }

  return <PageUI name="وتری" calculate={calculate} />;
}

export default Watari;
