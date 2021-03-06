import React, { useContext, useState } from "react";
import { Box, Center, useToast } from "@reverb-ui/react";

import Logo from "../../../shared/assets/logo.png";
import PhoneNumber from "../components/phone-number";
import CodeConfirmation from "../components/code-confirmation";
import { AuthContext } from "../../provider/auth-provider";

const Login = () => {
  const [code, setCode] = useState<string>("");
  const [showPhoneNumber, setShowPhoneNumber] = useState<boolean>(true);
  const toast = useToast();
  const { sendPhoneNumber, sendPhoneCode } = useContext(AuthContext);

  const sendPhone = async (phone: string) => {
    sendPhoneNumber(phone)
      .then(() => {
        setShowPhoneNumber(false);
      })
      .catch(() => {
        toast({
          title: "Telefone inválido",
          description: "Favor inserir um número de telefone válido",
          status: "error",
          duration: 6000,
          isClosable: true,
          position: "top"
        });
      });
  };

  const sendCode = async (code: number) => {
    sendPhoneCode(code)
      .then(() => {
        toast({
          title: "Sucesso",
          description: "Logado com sucesso",
          status: "success",
          duration: 6000,
          isClosable: true,
          position: "top"
        });
      })
      .catch(() => {
        toast({
          title: "Código inválido",
          description: "Favor inserir o código enviado via sms",
          status: "error",
          duration: 6000,
          isClosable: true,
          position: "top"
        });
      });
  };

  return (
    <Box bg="#ddd" minH="100vh" display="flex" flexDirection="column">
      <Center bg="white" borderBottomRadius="30px" p="10px">
        <img src={String(Logo)} alt="logo" width="300px" />
      </Center>
      {showPhoneNumber ? (
        <PhoneNumber sendPhoneNumber={sendPhone} />
      ) : (
        <CodeConfirmation sendCodeNumber={sendCode} />
      )}
    </Box>
  );
};

export default Login;
