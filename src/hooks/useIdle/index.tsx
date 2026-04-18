import useIdle from "./useIdle";

const One = () => {
  const { idle } = useIdle(2000);

  console.log({ idle });

  return (
    <div>
      <h1>useIdle</h1>
    </div>
  );
};

export default One;
