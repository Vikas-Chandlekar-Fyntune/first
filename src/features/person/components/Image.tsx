const Image = ({ url, title }: { url: string; title: string }) => {
  console.log("vikas");

  return (
    <>
      <img src={url} alt={title} />
    </>
  );
};

export default Image;
