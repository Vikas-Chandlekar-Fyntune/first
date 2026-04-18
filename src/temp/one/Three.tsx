import Lorem from "./components/Lorem";
import StickyContainer from "./components/StickyContainer";

const Three = () => {
  return (
    <>
      <div className="space-y-4">
        <section>
          <Lorem />
          <StickyContainer position="bottom" className="bg-gray-300">
            Sticky Div 1
          </StickyContainer>
        </section>

        <section>
          <StickyContainer className="bg-amber-300">
            Sticky Div 2
          </StickyContainer>
          <Lorem />
        </section>
      </div>
    </>
  );
};

export default Three;
