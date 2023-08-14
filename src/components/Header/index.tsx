import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Minicart from "../Minicart";

import {
  CorebizIcon,
  SearchIcon,
  UserIcon,
  MinicartIcon,
  MenuIcon,
} from "../../assets/icons/icons";
import "./styles.css";

const Header: React.FC = () => {
  const [get] = useCookies(["minicart"]);
  const [open, setOpen] = useState<boolean>(false);

  const product = get;

  return (
    <>
      <div className={"headerContainer"}>
        <div className={"headerWrappper"}>
          <div className={"headerIcon"}>
            <a href="/">
              <CorebizIcon />
            </a>
          </div>
          <div className={"headerSearch"}>
            <input type="text" placeholder="O que está procurando?" />
            <SearchIcon />
          </div>
          <div className={"headerAccount"}>
            <a href="/login">
              <UserIcon />
              Minha Conta
            </a>
          </div>
          <div className={"headerMinicart"} onClick={() => setOpen(!open)}>
            <MinicartIcon />
            {product?.minicart ? <span>{product?.minicart.length}</span> : null}
          </div>
        </div>
        <Minicart open={open} setOpen={setOpen} />
      </div>
      <div className={"headerContainerMobile"}>
        <div className={"headerWrappper"}>
          <div className={"menuIcon"}>
            <MenuIcon />
          </div>
          <div className={"headerIcon"}>
            <a href="/">
              <CorebizIcon />
            </a>
          </div>
          <div className={"headerMinicart"} onClick={() => setOpen(!open)}>
            <MinicartIcon />
            {product?.minicart ? <span>{product?.minicart.length}</span> : null}
          </div>
          <Minicart open={open} setOpen={setOpen} />
          <div className={"headerSearch"}>
            <input type="text" placeholder="O que está procurando?" />
            <SearchIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
