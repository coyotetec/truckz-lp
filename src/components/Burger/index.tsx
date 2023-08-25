import { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import { Container, Icon, Nav } from './style';

type Navlinks = {
  name: string;
  link: string;
};

const navLinks: Navlinks[] = [
  {
    name: 'Início',
    link: '#home',
  },
  {
    name: 'A Simplicidade',
    link: '#simplify',
  },
  {
    name: 'Baixe o app',
    link: '#download',
  },
  {
    name: 'Funcionalidades',
    link: '#features',
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
              <li key={name} onClick={() => setOpen(!isOpen)}>
                <a href={link}>{name}</a>
              </li>
            ))}
          </Nav>
        </Container>
      )}
    </>
  );
}
