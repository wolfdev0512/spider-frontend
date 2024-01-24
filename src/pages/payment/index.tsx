import React, { useState, useEffect } from "react";
import { AppLayout } from "../../layouts";
import * as Styled from "./activate.styles";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { singleActions } from "../../redux/single";

import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import axios from "axios";
import { SERVER_URL } from "../../config";

const CheckoutForm: React.FC = () => {
  const router = useNavigate();

  const [count, setCount] = useState(1);
  const { flag, company, address, name, email, link, size } = useSelector(
    (state: any) => state.single
  );

  const [currentUser, setCurrentUser] = useState<any>({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router("/signin");
    } else {
      const decode: any = jwtDecode(token);
      if (decode.role) {
        router("/admin");
      }
      setCurrentUser(decode);
    }
  }, []);

  return (
    <form>
      {!flag && (
        <>
          <Styled.PaySettingWrapper>
            <div>
              <h3>Month</h3>
              <Styled.CounterWrapper>
                <span
                  onClick={() =>
                    setCount((prev) => (prev > 1 ? prev - 1 : prev))
                  }
                >
                  -
                </span>
                <input
                  value={count}
                  onChange={(e) =>
                    !isNaN(Number(e.target.value)) &&
                    Number(e.target.value) > 0 &&
                    setCount(Number(e.target.value))
                  }
                />
                <span onClick={() => setCount((prev) => prev + 1)}>+</span>
              </Styled.CounterWrapper>
            </div>
            <div>
              <h3>Price</h3>
              <h2>${50 * count}.00</h2>
            </div>
          </Styled.PaySettingWrapper>
          <Styled.Divider />
        </>
      )}
      <PaymentForm
        applicationId="sandbox-sq0idb-nP6eTBYzaPexcBtq9o9l8Q"
        locationId="LEWP2HC84SHQT"
        cardTokenizeResponseReceived={async (token, buyer) => {
          let amount = flag ? 8 : count * 50;
          const response = await axios.post(SERVER_URL + "/payment", {
            sourceId: token.token,
            amount: amount,
          });
          if(response.data.data === "COMPLETED"){
            if(flag){
              const res = await axios.post(SERVER_URL + "/single", {
                userId: currentUser.id,
                company:company,
                address:address,
                name:name,
                email:email,
                link:link,
                size:size,
              });
              if(res.data.success)
              {
                toast.success(res.data.message)
                router("/generator")
              }
              else{
                toast.error(res.data.message)
              }
            } else {
              const res = await axios.post(SERVER_URL + "/activate", {
                userId: currentUser.id,
                amount: amount,
              });
              if(res.data.success)
              {
                toast.success(res.data.message)
                localStorage.setItem("token", res.data.token);
                router("/generator")
              }
              else{
                toast.error(res.data.message)
              }
            }
          } 
          else{
            toast.error(response.data.data);
          }
        }}
      >
        <CreditCard />
      </PaymentForm>
    </form>
  );
};

export const Payment: React.FC = () => {
  const dispatch = useDispatch();
  const { flag } = useSelector((state: any) => state.single);

  const router = useNavigate();
  return (
    <AppLayout>
      <Styled.ActivateWrapper>
        <span
          onClick={() => {
            dispatch(
              singleActions.setSingle({
                flag: false,
                company: "",
                address: "",
                name: "",
                email: "",
                link: "",
                size: "",
              })
            );
            router(flag ? "/singlereceipt" : "/generator");
          }}
        >
          <FaArrowLeftLong /> Back
        </span>
        <div>
          <CheckoutForm />
        </div>
      </Styled.ActivateWrapper>
    </AppLayout>
  );
};
