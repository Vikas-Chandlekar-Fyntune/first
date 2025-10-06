const Image = ({ url, title }: { url: string; title: string }) => {
  return (
    <>
      <img src={url} alt={title} />
    </>
  );
};

export default Image;
