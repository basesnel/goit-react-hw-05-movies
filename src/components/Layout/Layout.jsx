import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Loading } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<Loading>Loading...</Loading>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
