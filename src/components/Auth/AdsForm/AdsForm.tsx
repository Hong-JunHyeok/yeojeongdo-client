import React from "react";
import { Link } from "react-router-dom";
import { AdsContainer, AdContext, AdRoyalty } from "./AdsFormStyles";

const AdsForm: React.VFC = () => {
  return (
    <AdsContainer>
      <AdContext>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QbRaZliUWCxisDi-ALqAG6EvQsKiFF_7Vw&usqp=CAU"
          alt=""
        />
        <div>
          <h1>새로운 소식을 지도에서 만나 보세요</h1>
          <Link to="/join">여정도와 함께해보세요.</Link>
        </div>
      </AdContext>
      <AdRoyalty>
        <p>ⓒ 2021 yeo Jung Do All rights reserved.</p>
      </AdRoyalty>
    </AdsContainer>
  );
};

export default AdsForm;
