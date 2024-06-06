import * as React from 'react';
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
      <div className="flex nav-container bg-rolling-stone-500 items-center w-3/4 max-sm:2/4 justify-end">
        <div className="sheet-container flex md:hidden">
          <Sheet>
            <SheetTrigger>
              {' '}
              <Button className="flex bg-transparent justify-self-end">
                <Menu color="#f6f6f6" size={36} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="flex flex-col space-y-6 w-full items-center">
                  <Button className="w-2/4">Accueil</Button>
                  {/* <Button className="w-2/4">À propos</Button>
                  <Button className="w-2/4">Parcours</Button>
                  <Button className="w-2/4">Projets</Button>
                  <Button className="w-2/4">Sandbox</Button>
                  <Button className="w-2/4">Contact</Button> */}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="nav-btns-container flex max-md:hidden justify-end space-x-6">
          <Button className="">Accueil</Button>
          <Button className="">À propos</Button>
          <Button className="">Parcours</Button>
          <Button className="">Projets</Button>
          <Button className="">Sandbox</Button>
          {/* <Button className="">Contact</Button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
