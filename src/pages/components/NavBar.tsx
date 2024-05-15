import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

interface NavbarProps {
  // Add any props you want to pass to the navbar component
}

const Navbar: React.FC<NavbarProps> = () => {

  const StyledNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
  `;

  const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const MiddleRow = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
  `;

  const BottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const LinkItem = styled(Link)`
    text-decoration: none;
    margin: 0 10px;
    padding: 5px 10px;
    color: inherit;
  `;

  const ActiveLink = styled(LinkItem)`
    background-color: #ddd;
    color: #333;
  `;

  const Logo = styled.h1`
    font-size: 24px;
    text-decoration: none;
  `;

  const SocialLink = styled.a`
    color: inherit;
    margin: 0 5px;
  `;

  const SocialIcon = styled.i`
    font-size: 18px;
  `;

  const RouteDisplay = styled.p`
    font-size: 12px;
  `;

  return (
    <StyledNavbar className="navbar">
      <TopRow>
        <SocialLink href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <SocialIcon className="fa fa-facebook" />
        </SocialLink>
        <SocialLink href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <SocialIcon className="fa fa-twitter" />
        </SocialLink>
      </TopRow>
      <MiddleRow>
        <Link to="/" className={`logo ${location.pathname === '/' ? 'active' : ''}`}>
          My Logo
        </Link>
        <ul>
          <li>
            <ActiveLink to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="/about" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              About
            </ActiveLink>
          </li>
          {/* Add more links as needed */}
        </ul>
      </MiddleRow>
      <BottomRow>
        <RouteDisplay>Currently viewing: {location.pathname}</RouteDisplay>
      </BottomRow>
    </StyledNavbar>
  );
};

export default Navbar;
