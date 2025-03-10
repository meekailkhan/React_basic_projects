import { useState, useEffect } from "react";
import "./Currency.css";
import axios from "axios";

function Currency() {
  const [rateList, setRateList] = useState({});
  const [amount, setAmount] = useState<number>(1);
  const [fromCurr, setFromCurr] = useState<string>("USD");
  const [toCurr, setToCurr] = useState<string>("USD");
  const [changedAmo, setChangedAmo] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurr}`;
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data.rates);
        setRateList(response.data.rates);
        const converter = response.data.rates[toCurr];
        setChangedAmo(converter * amount);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [amount,toCurr,fromCurr]);

  // useEffect(()=>{
  //   const converted = rateList
  // },[])

  return (
    <div className="mainContainer">
      <div className="currency-container">
        <h1>Currency Converter</h1>
        <div className="currency-cal">
          <div className="amount-field">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAmount(+e.target.value)
              }
              placeholder="Amount"
            />
          </div>
          <div className="from-currency">
            <label htmlFor="">From Currency</label>
            <select
              name=""
              id=""
              value={fromCurr}
              onChange={(e) => setFromCurr(e.target.value)}
            >
              {Object.keys(rateList).map((curr) => (
                <option value={curr} key={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>
          <div className="to-currency">
            <label htmlFor="">To Currency</label>
            <select name="" id="" onChange={(e) => setToCurr(e.target.value)}>
              {Object.keys(rateList).map((curr) => (
                <option value={curr} key={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="display-container">
          <h2 className="currency-display"> grand total is : {changedAmo?.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}

export default Currency;
