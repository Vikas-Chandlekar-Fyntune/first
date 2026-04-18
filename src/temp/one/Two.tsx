import BottomStickyContainer from "./components/BottomStickyContainer";
import Lorem from "./components/Lorem";

const Two = () => {
  return (
    <>
      <div className="space-y-4">
        <section>
          <Lorem />
          <BottomStickyContainer className="bg-gray-300">
            Sticky Div 1
          </BottomStickyContainer>
        </section>

        <section>
          <Lorem />
          <BottomStickyContainer className="bg-amber-300">
            Sticky Div 2
          </BottomStickyContainer>
        </section>
      </div>
    </>
  );
};

export default Two;
