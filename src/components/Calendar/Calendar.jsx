import React, { useEffect, useState } from "react";

import "./styles.scss";

const Calendar = () => {
  const tournamentMonths = [
    {
      nome: "Fevereiro",
      dias: [
        -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28,
      ],
    },
    {
      nome: "Março",
      dias: [
        -2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
    {
      nome: "Abril",
      dias: [
        -3, -4, -5, -6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
    },
  ];

  const [month, setMonth] = useState({
    nome: "",
    dias: [],
    index: 0,
  });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMonth({ ...tournamentMonths[0], index: 0 });
  }, []);

  const incrementIndex = () => {
    console.log("he");
    if (index >= tournamentMonths.length) {
      return;
    }

    setIndex((previousValue) => previousValue + 1);
  };
  const decrementIndex = () => {
    if (index <= 0) {
      return;
    }
    setIndex((previousValue) => previousValue - 1);
  };

  useEffect(() => {
    setMonth({ ...tournamentMonths[index], index: index });
    console.log(index);
  }, [index]);

  return (
    <div className="calendario">
      <div className="headerText">
        <span onClick={decrementIndex}>{month.index > 0 ? "<" : null}</span>
        <h1>{month.nome}</h1>
        <span onClick={incrementIndex}>
          {month.index < tournamentMonths.length - 1 ? ">" : null}
        </span>
      </div>
      <div className="diasDaSemana">
        <p>S</p>
        <p>T</p>
        <p>Q</p>
        <p>Q</p>
        <p>S</p>
        <p>S</p>
        <p>D</p>
      </div>
      <div className="numerosDosDias">
        {month.dias.map((day) => (
          <p
            key={day}
            className={
              (day === 23 && month.nome === "Fevereiro") ||
              (day === 2 && month.nome === "Março") ||
              (day === 9 && month.nome === "Março") ||
              (day === 16 && month.nome === "Março") ||
              (day === 23 && month.nome === "Março") ||
              (day === 6 && month.nome === "Abril") ||
              (day === 13 && month.nome === "Abril") ||
              (day === 20 && month.nome === "Abril") ||
              (day === 27 && month.nome === "Abril")
                ? "gameDay"
                : ""
            }
          >
            {day > 0 ? day : ""}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
