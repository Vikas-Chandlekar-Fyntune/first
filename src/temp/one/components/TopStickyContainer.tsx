interface ITopStickyContainerProps {
  children: React.ReactNode;
  className?: string;
}

const TopStickyContainer = ({
  children,
  className = "",
}: ITopStickyContainerProps) => {
  return <div className={`sticky top-0 z-10 ${className}`}>{children}</div>;
};

export default TopStickyContainer;
