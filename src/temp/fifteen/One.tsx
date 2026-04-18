import styled from "styled-components";
import CompareCard from "./components/CompareCard";

const One = () => {
  return (
    <>
      <SplitGrid>
        <div>1</div>
        <div
          style={{
            outline: "1px solid red",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "8px",
            }}
          >
            {/* <div>11</div>
            <div>12</div>
            <div>13</div> */}
            <CompareCard />
            <CompareCard />
            <CompareCard />
          </div>
        </div>
      </SplitGrid>

      <div>
        <h1>Header</h1>
        <SplitGrid>
          <div
            style={{
              paddingLeft: "1rem",
            }}
          ></div>
          <div
            style={{
              outline: "1px solid red",
            }}
          >
            4
          </div>
        </SplitGrid>
      </div>
    </>
  );
};

export default One;

const SplitGrid = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 16px;
  width: 100%;
`;
