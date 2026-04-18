import Lorem from "./components/Lorem";
import TopStickyContainer from "./components/TopStickyContainer";

const One = () => {
  return (
    <>
      <div className="space-y-4">
        <section>
          <TopStickyContainer className="bg-gray-300">
            Sticky Div 1
          </TopStickyContainer>
          <Lorem />
        </section>

        <section>
          <TopStickyContainer className="bg-amber-300">
            Sticky Div 2
          </TopStickyContainer>
          <Lorem />
        </section>
      </div>
    </>
  );
};

export default One;
