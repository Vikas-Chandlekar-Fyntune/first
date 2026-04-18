import { FeatureProvider } from "./features/featureFlags/FeatureProvider";
import One from "./One";

const index = () => {
  return (
    <>
      <FeatureProvider>
        <One />
      </FeatureProvider>
    </>
  );
};

export default index;
