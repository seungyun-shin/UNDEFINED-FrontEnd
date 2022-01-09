import styled, {css, createGlobalStyle} from "styled-components"

export const HeaderStyleCom = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    /* a{
      font-family: 'Romelio';
    } */

    .header-wraper{
        position:relative;
        /* top:0; */
        /* left:0; */
        width: 100%;
        /* max-width: 1700px; */
        display: flex;
        justify-content: center;
        align-items: center;
        /* height: 9vh;
        padding-top: 9vh; */
        color: white;
        font-size: 1rem;
        z-index: 200;

        .header-container{

            display: flex;
            width: 100%;
            justify-content: space-between;
            padding-left: 8%;
            padding-right: 8%;
            height: 9vh;
            padding-top: 9vh;
        }
    }

    a {
                    color: #FFF;
                    font-size:17px;
                    font-weight: 600;
                }

    .navbar {
      width: 100%;
        /* background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%); */
        /* height: 80px; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* font-size: 1.2rem; */
    }

.logo {
    /* width: 100%; */
  color: #fff;
  justify-self: start;
  /* margin-left: 20px; */
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 900;
}

.fa-firstdraft {
  margin-left: 0.5rem;
  font-size: 1.6rem;
}

.nav-menu {
  display: grid;
  grid-template-columns: repeat(10, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  /* width: 70vw; */
  /* width: 70vw; */
  justify-content: end;
  /* margin-right: 2rem; */
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 80px; */
  /* width:; */
}

.nav-links {
  display: flex;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  /* width: 65px; */
}

.nav-links:hover {
  /* background-color: #1888ff; */
  background-color: #000000;
  border-radius: 4px;
  transition: all 0.39s ease-out;
}

.fa-bars {
  color: #fff;
}

.nav-links-mobile {
  display: none;
}

.menu-icon {
  display: none;
}

.logout-hamburger{
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: #FFF;
  font-size:17px;
  font-weight: 900;
  display: none;
}

@media screen and (max-width: 1100px) {
  .NavbarItems {
    position: relative;
  }

  .nav-menu {
    display: flex;
    /* display: none; */
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 1s ease;
  }

  .nav-menu.active {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background: #242222; */
    background: #161616;
    left: 0;
    opacity: 1;
    visibility: visible;
    transition: all 0.5s ease;
    z-index: 1;
  }

  .nav-links {
    text-align: center;
    padding: 1rem;
    /* width: 100%; */
    display: table;
    font-size: 5vw;
    font-family: Romelio;
    color: #dfd3c3;
  }
  
  .logout-hamburger{
    text-align: center;
    padding: 1rem;
    /* width: 100%; */
    display: table;
    font-size: 5vw;
    font-family: Romelio;
    color: #dfd3c3;
  }

  .nav-links:hover {
    /* background-color: #1888ff; */
    /* background-color: #1888ff; */
    border-radius: 0;
  }

  /* .navbar-logo {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  } */

  .logo {
    z-index: 1;
    /* position: absolute;
    top: 0;
    left: 0; */
    /* transform: translate(25%, 50%); */
  }

  .menu-icon {
    display: block;
    /* position: fixed; */
    /* position: absolute;
    top: 5%;
    right: 5%; */
    /* transform: translate(-100%, 60%); */
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 9999999999999999999999999;
  }

  .fa-times {
    color: #fff;
    font-size: 2rem;
  }

  .nav-links-mobile {
    display: block;
    text-align: center;
    padding: 1.5rem;
    margin: 2rem auto;
    border-radius: 4px;
    width: 80%;
    background: #1888ff;
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }

  .nav-links-mobile:hover {
    background: #fff;
    color: #1888ff;
    transition: 250ms;
  }

  button {
    display: none;
  }

  .fa-user{
    /* display: none; */
  }
}

.dropdown-menu {
    /* background: red; */
    /* background-color: #000000; */
    width: 100px;
    position: absolute;
    top: 143px;
    list-style: none; 
    text-align: start;
    }

    .dropdown-menu li {
    /* background: #1888ff; */
    cursor: pointer;
    }

    .dropdown-menu li:hover {
    /* background: #5cabff; */
    background-color: #000000;
    }

    .dropdown-menu.clicked {
    display: none;
    }

    .dropdown-link {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: #fff;
    padding: 16px;
    }

    .dropdown-link:hover{
      background-color: #000000;
    }


    .dropdown-link-logout{
      display: block;
      height: 100%;
      width: 100%;
      text-decoration: none;
      color: #fff;
      padding: 16px;
      font-weight: 600;
    }
    
    .fa-times{
      color: #dfd3c3;
    }

    /* @media screen and (max-width: 960px) { */
    @media screen and (max-width: 1100px) {
    .fa-caret-down {
        display: none;
    }
    }

    
`

