import styled from "styled-components";
import Header from "./_components/Header";

const PageWrapper = styled.div`
  min-height: 100vh;
`;

const Content = styled.main`
  padding-top: var(--navbar-height);
`;

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <Content>{children}</Content>
    </PageWrapper>
  );
};

function Two() {
  return (
    <Layout>
      <h1>Vikas</h1>
      <p>This content will NEVER go under the fixed header.</p>
    </Layout>
  );
}

export default Two;
