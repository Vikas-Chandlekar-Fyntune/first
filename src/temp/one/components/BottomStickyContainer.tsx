interface IBottomStickyContainerProps {
  children: React.ReactNode;
  className?: string;
}

const BottomStickyContainer = ({
  children,
  className = "",
}: IBottomStickyContainerProps) => {
  return <div className={`sticky bottom-0 z-10 ${className}`}>{children}</div>;
};

export default BottomStickyContainer;
