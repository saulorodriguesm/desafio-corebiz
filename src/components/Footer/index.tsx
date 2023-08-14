import React from "react";

import {
  MailIcon,
  PhoneIcon,
  CorebizFooterIcon,
  VtexIcon,
} from "../../assets/icons/icons";

import "./styles.css";

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="footerAddress">
          <h3>Localização</h3>
          <p>
            Avenina Andôme, 2000, Bloco 6 e 8 <br />
            Alphavile SP
            <a href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a>
            +55 11 3090 1039
          </p>
        </div>
        <div className="footerContact">
          <a href="mailto:brasil@corebiz.ag">
            <MailIcon />
            Entre em contanto
          </a>
          <a href="/">
            <PhoneIcon />
            Fale com o nosso consultor online
          </a>
        </div>
        <div className="footerCompanys">
          <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
            Created by
            <CorebizFooterIcon />
          </a>
          <a href="https://vtex.com/br-pt/" target="_blank" rel="noreferrer">
            <VtexIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
