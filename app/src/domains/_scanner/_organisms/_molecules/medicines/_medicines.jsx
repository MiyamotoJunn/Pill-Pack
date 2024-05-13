import images from "../../../../../constants/image.constant";
import S from "./style";

import TestStep from "../testStep/testStep";
import React from "react";

export default function Medicines({ medicine, handler, remove, state, count }) {
  return (
    <S.EfficacySection key={count}>
      <S.TitleSection state={state}>
        <S.TitleText delay={count} state={state}>
          {medicine.nameList && medicine.nameList.length}
          {medicine.title}
        </S.TitleText>
        <S.EfficacyImage
          onClick={() => handler(medicine.efficacy, count)}
          delay={count}
          state={state}
          name={medicine.efficacy}
          src={images[medicine.efficacy]}
        />
        <S.EfficacyText delay={count} state={state} name={medicine.efficacy}>
          {medicine.nameList && "이 약은"} {medicine.ko}
        </S.EfficacyText>
      </S.TitleSection>
      <S.NameSection name={medicine.efficacy} state={state}>
        {medicine.nameList && (
          <TestStep
            key={medicine.efficacy}
            list={medicine.nameList}
            efficacy={medicine.name}
            handler={handler}
            remove={remove}
            count={count}
            name={medicine.efficacy}
          />
        )}
      </S.NameSection>
    </S.EfficacySection>
  );
}
