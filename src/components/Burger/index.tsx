import { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import { Container, Icon, Nav } from './style';
import { Link } from 'react-scroll';

type Navlinks = {
  name: string;
  link: string;
};

const navLinks: Navlinks[] = [
  {
    name: 'Início',
    link: 'home',
  },
  {
    name: 'A Simplicidade',
    link: 'simplify',
  },
  {
    name: 'Baixe o app',
    link: 'download',
  },
  {
    name: 'Funcionalidades',
    link: 'features',
  },
];

export function Burger() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Icon>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFFFF" />;
      </Icon>
      {isOpen && (
        <Container>
          <Nav>
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setOpen(!isOpen)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </Nav>
        </Container>
      )}
    </>
  );
}
