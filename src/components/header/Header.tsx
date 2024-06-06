import { NavLink } from 'react-router-dom';

import { Menu } from 'lucide-react';
import { Button } from '../ui/button';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';

import logo from '../../assets/logo_nc6.png';

function Header() {
  return (
    <header className="header-container flex h-32 items-center justify-between p-6">
      <div className="title-container w-1/4 max-sm:2/4 p-">
        <NavLink to="/">
          <img src={logo} alt="Logo NC6" className="md:w-[60%]" />
        </NavLink>
      </div>
      <div className="flex nav-container items-center w-3/4 max-sm:2/4 justify-end">
        <div className="sheet-container flex md:hidden">
          <Sheet>
            <SheetTrigger>
              {' '}
              <Button className="flex bg-transparent justify-self-end w-[50px] p-0 ">
                <Menu color="#f6f6f6" size={36} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="flex flex-col space-y-3 w-full items-center">
                  <NavLink to="/">
                    <Button variant="ghost">Accueil</Button>
                  </NavLink>
                  <NavLink to="/about">
                    <Button variant="ghost">À propos</Button>
                  </NavLink>
                  <NavLink to="/timeline">
                    <Button variant="ghost">Parcours</Button>
                  </NavLink>
                  <NavLink to="/skills">
                    <Button variant="ghost">Compétences</Button>
                  </NavLink>
                  <NavLink to="/projects">
                    <Button variant="ghost">Projets</Button>
                  </NavLink>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="nav-btns-container flex max-md:hidden justify-end space-x-6">
          <NavLink to="/">
            <Button>Accueil</Button>
          </NavLink>
          <NavLink to="/about">
            <Button>À propos</Button>
          </NavLink>
          <NavLink to="/timeline">
            <Button>Parcours</Button>
          </NavLink>
          <NavLink to="/skills">
            <Button>Compétences</Button>
          </NavLink>
          <NavLink to="/projects">
            <Button>Projets</Button>
          </NavLink>
          {/* <Button className="">Contact</Button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
