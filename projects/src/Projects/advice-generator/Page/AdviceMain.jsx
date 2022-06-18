import axios from "axios";
import { useState, useEffect } from "react";
import "../../../style/advice-generator/index.scss";
import Button from "../Components/Button";
import Context from "../Components/Context";
import Image from "../Components/Image";

const AdviceMain = ({ screenWidth }) => {
  const [adviceClient, setAdviceClient] = useState();
  const [number, setNumber] = useState(0);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("https://api.adviceslip.com/advice");

      console.log(data);

      const advice = data.slip;

      setAdviceClient(advice);
    }

    getData();
  }, [number]);

  function shfleBtn() {
    if (number === 0) {
      setNumber(1);
    } else if (number === 1) {
      setNumber(0);
    }
  }

  return (
    <div className="advice-generator">
      <div className="advice-generator--context">
        {adviceClient ? (
          <>
            <Context advice={adviceClient} />
            <Image screenWidth={screenWidth} />
            <Button shfleBtn={shfleBtn} />
          </>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default AdviceMain;
