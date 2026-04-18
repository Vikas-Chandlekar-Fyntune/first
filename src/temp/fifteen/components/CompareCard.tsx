import React from "react";
import styled from "styled-components";

const insurerDetails = {
  imgSrc:
    "https://motorinsurance-uat.auuat.bank.in/flwma/uploads/logos/icici_lombard.png",
  insurerName: "ICICI Lombard General Insurance",
  idvValue: "524,663",
  finalPrice: 100000,
};

export default function CompareCard() {
  const isGeneralInsurance = insurerDetails?.insurerName
    ?.toLowerCase()
    ?.includes("general insurance");
  const icName = isGeneralInsurance
    ? insurerDetails?.insurerName?.split(/(general | General)/gm)[0]
    : insurerDetails?.insurerName;

  return (
    <CompareCardContainer>
      <CompareCardCloseButton></CompareCardCloseButton>

      <CompareCardHeader>
        <CompareCardImage src={insurerDetails?.imgSrc} />
        <CompareCardICInfo>
          <CompareCardTitle>{icName}</CompareCardTitle>
          {isGeneralInsurance && (
            <CompareCardDescription>General Insurance</CompareCardDescription>
          )}
        </CompareCardICInfo>
      </CompareCardHeader>

      <CompareCardFooter>
        <CompareCardIDVContainer>
          <CompareCardIDVText>IDV</CompareCardIDVText>
          <CompareCardIDVValue>₹ {insurerDetails.idvValue}</CompareCardIDVValue>
        </CompareCardIDVContainer>
        <CompareCardBuyContainer>
          <CompareCardBuyText>incl. GST</CompareCardBuyText>
          <CompareCardBuyButton>
            <CompareCardBuyButtonPrice>
              ₹ {insurerDetails.finalPrice}
            </CompareCardBuyButtonPrice>
            {/* <ArrowRightAltIcon /> */}
            Right
          </CompareCardBuyButton>
        </CompareCardBuyContainer>
      </CompareCardFooter>
    </CompareCardContainer>
  );
}

const CompareCardContainer = styled.div`
  background-color: #fff;

  width: 33%;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border: 1px solid blue;
  border-radius: 12px;

  position: relative;
  width: 100%;
`;

const CompareCardCloseButton = styled.div`
  cursor: pointer;
  position: absolute;

  top: -0.7rem;
  right: -0.7rem;

  color: #42265e;
`;

const CompareCardHeader = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  gap: 10px;
`;

const CompareCardImage = styled.img`
  height: 20px;
`;

const CompareCardICInfo = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 18px;
`;

const CompareCardTitle = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
`;

const CompareCardDescription = styled.span`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;

  color: #6c6c6c;
`;

const CompareCardFooter = styled.div`
  flex: 1;

  display: flex;
`;

const CompareCardIDVContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  line-height: 26px;
`;

const CompareCardIDVText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #6c6c6c;
`;

const CompareCardIDVValue = styled.span`
  color: #111;
  font-weight: 600;
`;

const CompareCardBuyContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CompareCardBuyText = styled.span`
  font-weight: 500;
  font-size: 10px;
  color: #6c6c6c;
`;

const CompareCardBuyButton = styled.button`
  background-color: var(--au-dark-orange);
  color: #fff;

  display: flex;
  align-items: center;

  border: none;
  border-radius: 25px;

  font-size: 12px;
  font-weight: 400;

  padding-left: 14px;
  padding-right: 8px;
`;

const CompareCardBuyButtonPrice = styled.span`
  white-space: nowrap;
`;
