import { useContext } from "react";
import { AppContext } from "./context";

function PageUI({ name, calculate }) {
  const { result, error, info, handleChange } = useContext(AppContext);

  return (
    <div className="center">
      <div className="mt-7 p-5 rounded-lg w-4/5 md:w-2/5 bg-gray-300">
        <h1 className="text-center text-2xl font-bold mb-5"> روش {name}</h1>
        <div className="center">
          <form className="flex flex-col items-center gap-4">
            <div className="flex flex-row-reverse">
              <label>:(x برحسب) معادله</label>
              <input
                value={info.equation}
                name="equation"
                onChange={handleChange}
                className="mr-8 px-3 rounded-lg outline-none"
                type="text"
              />
            </div>
            {name !== "وتری" && (
              <div className="flex flex-row-reverse justify-center gap-32">
                <label>:بازه</label>
                <div>
                  <input
                    value={info.range1}
                    name="range1"
                    onChange={handleChange}
                    className="w-20 px-3 rounded-lg outline-none"
                    type="number"
                  />
                  <input
                    value={info.range2}
                    name="range2"
                    onChange={handleChange}
                    className="w-20 ml-8 px-3 rounded-lg outline-none"
                    type="number"
                  />
                </div>
              </div>
            )}
            <div className="flex flex-row-reverse self-end gap-16">
              <label>:(...D) تعداد اعشار</label>
              <input
                value={info.decimal}
                name="decimal"
                onChange={handleChange}
                className="w-20 mr-8 px-3 rounded-lg outline-none"
                type="number"
              />
            </div>
            <div className="flex flex-row-reverse self-end gap-7">
              <label>:{"( |f(x)|< 10^(...) )"} شرط</label>
              <input
                value={info.condition}
                name="condition"
                onChange={handleChange}
                className="w-20 mr-8 px-3 rounded-lg outline-none"
                type="number"
              />
            </div>
            {name === "نیوتن" && (
              <div className="flex flex-row-reverse self-end">
                <label>.را در صورت وجود وارد کنید x0</label>
                <input
                  value={info.x0}
                  name="x0"
                  onChange={handleChange}
                  className="w-20 mr-8 px-3 rounded-lg outline-none"
                  type="number"
                />
              </div>
            )}
            {name === "وتری" && (
              <div className="w-full flex flex-col items-end gap-4">
                <div className="flex flex-row-reverse self-end">
                  <label>.را در صورت وجود وارد کنید x0</label>
                  <input
                    value={info.x0}
                    name="x0"
                    onChange={handleChange}
                    className="w-20 mr-8 px-3 rounded-lg outline-none"
                    type="number"
                  />
                </div>
                <div className="flex flex-row-reverse self-end">
                  <label>.را در صورت وجود وارد کنید x1</label>
                  <input
                    value={info.x1}
                    name="x1"
                    onChange={handleChange}
                    className="w-20 mr-8 px-3 rounded-lg outline-none"
                    type="number"
                  />
                </div>
              </div>
            )}
            <button
              onClick={calculate}
              className="w-full bg-sky-400 py-1 my-4 text-white rounded-xl"
            >
              محاسبه ریشه
            </button>
            <label>:ریشه معادله</label>
            <span className="w-1/2 bg-red-400 my-2 py-1 text-center rounded-xl text-white mx-auto">
              {result}
            </span>
            {error && (
              <span className="text-red-500">
                . ریشه در بازه مورد نظر وجود ندارد
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default PageUI;
