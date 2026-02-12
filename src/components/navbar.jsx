function Navbar({ name, handleName }) {
  const names = [
    { id: 1, title: "دوبخشی", route: "doBakhshi" },
    { id: 2, title: "نابجایی", route: "nabejaei" },
    { id: 3, title: "نیوتن", route: "newton" },
    { id: 4, title: "وتری", route: "watari" },
  ];

  return (
    <div className="text-right px-5 py-2">
      <h1 className="text-2xl text-slate-800 font-bold mb-5">
        f(x)=0 حل عددی معادلات
      </h1>
      <div className="flex flex-row-reverse justify-around">
        {names.map((item) => (
          <span
            key={item.id}
            className={`font-semibold cursor-pointer ${name === item.route ? "text-slate-700 shadow-lg" : "text-slate-800 "}`}
            onClick={() => {
              handleName(`${item.route}`);
            }}
          >
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
