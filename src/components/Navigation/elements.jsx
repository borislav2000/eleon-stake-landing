import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Button from "../UI/Button";

const StyledHeader = (props) => {
  return (
    <header className="bg-[#f4f2ed] w-full sticky top-0 z-10">
      {props.children}
    </header>
  );
};

const StyledHeaderContainer = (props) => {
  return (
    <div className="flex mx-auto h-20 max-w-[1440px] items-center gap-8 px-6 sm:px-8 justify-between">
      {props.children}
    </div>
  );
};

const StyledHeaderImage = (props) => {
  return (
    <Link smooth to="#main">
      <img src={props.src} alt={props.alt} width={props.width} />
    </Link>
  );
};

const StyledNavigationLinks = (props) => {
  return (
    <div
      className={`md:flex md:flex-1 md:justify-center md:items-center ${props.className}`}
    >
      <nav>
        <ul className="flex items-center gap-10 font-inter text-md font-medium">
          <li className="hover:text-gold">
            <Link smooth to="#benefits">
              Benefits
            </Link>
          </li>

          <li className="hover:text-gold">
            <Link smooth to="#steps">
              Steps
            </Link>
          </li>
          <li className="hover:text-gold">
            <Link smooth to="#contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const StyledBurgerMenuNavigationLinks = (props) => {
  return (
    <div className={`md:flex md:flex-1 md:justify-center md:items-center`}>
      <nav className="flex flex-col">
        <ul className="flex flex-col items-center gap-7 font-inter text-lg font-medium">
          <Link smooth to="#benefits">
            Benefits
          </Link>
          <Link smooth to="#steps">
            Steps
          </Link>
          <Link smooth to="#contact">
            Contact us
          </Link>

          <StyledButton
            className="font-inter font-medium bg-test rounded-md px-5 py-3  w-full md:inline-block text-center"
            buttonText="Try Staking"
            href="https://eleon.io/stake"
          />
        </ul>
      </nav>
    </div>
  );
};

const StyledCTAContainer = (props) => {
  return <div className="whitespace-nowrap">{props.children}</div>;
};

const StyledButton = (props) => {
  return (
    <a href={props.href} className={props.className}>
      <Button>{props.buttonText}</Button>
    </a>
  );
};

export {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderImage,
  StyledNavigationLinks,
  StyledCTAContainer,
  StyledBurgerMenuNavigationLinks,
  StyledButton,
};
