import React, { useContext, useState } from "react";
import { Box, Text, Input, Button, useToast } from "@reverb-ui/react";
import { AuthContext } from "../../provider/auth-provider";
import { Loading } from "../../../shared/presentation/components";

type IProps = {
  sendPhoneNumber: (phone: string) => Promise<void>;
};

const PhoneNumber = ({ sendPhoneNumber }: IProps) => {
  const [phone, setPhone] = useState<string>("");
  const { loading } = useContext(AuthContext);
  const toast = useToast();

  const onChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
      return;
    }
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    if (value.length < 4) {
      value = value.replace(/^(\d{2})/, "($1)");
    }
    if (value.length < 8) {
      value = value.replace(/^(\d{2})(\d)/, "($1)$2");
    } else {
      value = value.replace(/^(\d{2})(\d{5})(\d)/, "($1)$2-$3");
    }

    e.currentTarget.value = value;
    setPhone(value);
  };

  const handleSubmit = () => {
    const phoneNumber = phone.replace(/\D/g, "");

    if (phoneNumber.length !== 11) {
      toast({
        title: "Telefone inválido",
        description: "Favor inserir um número de telefone válido",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top"
      });
      return;
    }
    sendPhoneNumber(phoneNumber);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box p="30px" flex="1" display="flex" flexDirection="column">
          <Text color="#F8774A" fontSize="2rem" fontWeight="bold">
            Para acessar, <br /> entre com seu
            <br /> número de telefone
          </Text>
          <Box mt="20px">
            <Input
              onKeyUp={onChange}
              placeholder="Digite seu número de telefone"
              maxLength={14}
              size="lg"
              type="tel"
            />
          </Box>
          <Box mt="auto" mb="40px">
            <Button
              disabled={phone.length !== 14}
              w="100%"
              onClick={handleSubmit}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PhoneNumber;
