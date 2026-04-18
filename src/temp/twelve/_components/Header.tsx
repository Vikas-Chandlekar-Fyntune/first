import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: var(--navbar-height);

  background: #ffffff;
  border-bottom: 1.5px solid #e3e4e8;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  box-sizing: border-box;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div>Logo</div>
      <div>Menu</div>
    </HeaderWrapper>
  );
};

export default Header;
