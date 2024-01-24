import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as Styled from "./log.styles";
import * as FiIcon from "react-icons/fi";
import jwtDecode from "jwt-decode";

export const LogButton: React.FC = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [currentUser, setCurrentUser] = useState<any>({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode: any = jwtDecode(token);
      setCurrentUser(decode);
    }
  }, []);

  const handleActivate = () => {
    navigate("/payment");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const handleChange = () => {
    if (pathname === "/generator") {
      navigate("/singlereceipt");
    } else if (pathname === "/singlereceipt") {
      navigate("/generator");
    }
  };

  return (
    <Styled.LogButtonWrapper>
      {(pathname === "/singlereceipt" || pathname === "/generator") && (
        <Styled.LogButton onClick={handleChange} className="changePage">
          <span>
            {pathname === "/generator" ? "Single Mode" : "Monthly Mode"}
          </span>
          <FiIcon.FiShoppingCart />
        </Styled.LogButton>
      )}

      {!currentUser.role && !currentUser.isActive && (
        <Styled.LogButton onClick={handleActivate}>
          <span>Activate</span>
          <FiIcon.FiShoppingCart />
        </Styled.LogButton>
      )}
      <Styled.LogButton onClick={handleLogout} className="logout">
        <span>Log out</span>
        <FiIcon.FiLogOut />
      </Styled.LogButton>
    </Styled.LogButtonWrapper>
  );
};
