import React, { useState } from "react";

import { AppLayout } from "../../layouts";

import {
  Layout,
  ImageContainer,
  Image,
  FormContainer,
  Select,
  Input,
  SelectContainer,
  SelectLabel,
  InputContainer,
  InputLabel,
  ItemContainer,
} from "./styled";

import { logos } from "../main/data";

export const Single: React.FC = () => {
  const [logo, setLogo] = useState("Apple");
  return (
    <AppLayout>
      <Layout>
        <ImageContainer>
          <Image src={`assets/logos/${logo}.png`} alt="No Image" />
        </ImageContainer>
        <FormContainer>
          <ItemContainer>
            <SelectLabel>Company</SelectLabel>
            <SelectContainer>
              <Select
                onChange={(e) => {
                  setLogo(e.target.value);
                }}
              >
                {logos.map((item, key) => (
                  <option key={key} value={item.key}>
                    {item.key}
                  </option>
                ))}
              </Select>
            </SelectContainer>
          </ItemContainer>

          <ItemContainer>
            <InputLabel>Address: </InputLabel>
            <InputContainer>
              <Input placeholder="Address" />
            </InputContainer>
          </ItemContainer>
          <ItemContainer>
            <InputLabel>Name:</InputLabel>
            <InputContainer>
              <Input placeholder="Name" />
            </InputContainer>
          </ItemContainer>
          <ItemContainer>
            <InputLabel>Email</InputLabel>
            <InputContainer>
              <Input placeholder="Email" />
            </InputContainer>
          </ItemContainer>
          <ItemContainer>
            <InputLabel>Link</InputLabel>
            <InputContainer>
              <Input placeholder="Link" />
            </InputContainer>
          </ItemContainer>
          <ItemContainer>
            <InputLabel>Size</InputLabel>
            <InputContainer>
              <Input placeholder="Size" />
            </InputContainer>
          </ItemContainer>
        </FormContainer>
      </Layout>
    </AppLayout>
  );
};
