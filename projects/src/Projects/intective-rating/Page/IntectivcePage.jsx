import { useState } from "react";
import "../../../style/intective-rating/index.scss";
import ContextRating from "../Components/Rating/ContextRating";
import ImageStar from "../Components/Rating/ImageStar";
import Rating from "../Components/Rating/Rating";
import ContextThank from "../Components/Thanks/ContextThank";
import ImageThank from "../Components/Thanks/ImageThank";
import Selected from "../Components/Thanks/Selected";

const IntectivcePage = () => {
  const [submit, setSubmit] = useState(false);
  const [chooseNumber, setChooseNumber] = useState(null);

  return (
    <div className="intective-rating">
      <div className="intective-rating__component">
        {submit ? (
          <>
            <ImageThank />
            <Selected chooseNumber={chooseNumber} />
            <ContextThank />
          </>
        ) : (
          <>
            <ImageStar />
            <ContextRating />
            <Rating
              setSubmit={setSubmit}
              chooseNumber={chooseNumber}
              setChooseNumber={setChooseNumber}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default IntectivcePage;
