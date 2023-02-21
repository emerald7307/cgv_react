import { useState } from "react";

function Notconsole() {
  const [number, setNumber] = useState(0);

  const onIncrase = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  return <button onClick={onIncrease}> +1 </button>;
}
