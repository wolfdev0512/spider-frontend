import React, { useState, useEffect } from "react";
import * as Styled from "./main.styles";
import * as Comp from "../../components";
import { AppLayout } from "../../layouts";
import type * as T from "../../types/components";
import { logos } from "./data";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { Home } from "../home";

export const MainPage: React.FC = () => {
  const router = useNavigate();
  const [currentUser, setCurrentUser] = useState<any>({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(currentUser);
    if (!token) {
      // router("/signin");
    } else {
      const decode: any = jwtDecode(token);
      if (decode.role) {
        router("/admin");
      } else {
        setCurrentUser(decode);
        setAlert(
          decode.isActive
            ? {
                type: "warning",
                message:
                  "Your account's expire date is " +
                  new Date(decode.expireDate).toDateString(),
              }
            : { type: "warning", message: "You need to activate your account." }
        );
      }
    }
  }, []);

  const [selectedItem, setSelectedItem] = useState<T.IReceiptFormProps>({
    logo: "",
    fields: [],
  });
  const [alert, setAlert] = useState<T.IAlertProps>({
    type: "warning",
    message: "Please Log in.",
  });

  const handleLogoClick = (item: T.IReceiptFormProps) => {
    currentUser.isActive
      ? setSelectedItem(item)
      : toast.error("Please activate your account.");
  };

  return currentUser.id ? (
    <AppLayout>
      {selectedItem.logo ? (
        <Comp.ReceiptForm
          {...selectedItem}
          onBack={() => setSelectedItem({ logo: "", fields: [] })}
        />
      ) : (
        <Styled.MainPageWrapper>
          <Comp.Alert {...alert} />
          <Styled.LogoGridWrapper>
            {logos.map((item, key) => (
              <Styled.LogoItemWrapper
                key={key}
                onClick={() =>
                  handleLogoClick({ logo: item.key, fields: item.fields })
                }
              >
                <img
                  src={`/assets/logos/${item.key}.png`}
                  alt=""
                  draggable={false}
                />
              </Styled.LogoItemWrapper>
            ))}
          </Styled.LogoGridWrapper>
        </Styled.MainPageWrapper>
      )}
    </AppLayout>
  ) : (
    <Home />
  );
};
