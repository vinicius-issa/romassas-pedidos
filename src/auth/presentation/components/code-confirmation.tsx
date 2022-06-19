import React, { useContext, useState } from "react";
import { Box, Text, Input, Button, useToast } from "@reverb-ui/react";
import { AuthContext } from "../../provider/auth-provider";
import { Loading } from "../../../shared/presentation/components";

type IProps = {
  sendCodeNumber: (code: number) => Promise<void>;
};

const CodeConfirmation = ({ sendCodeNumber }: IProps) => {
  const [code, setCode] = useState<string>("");
  const toast = useToast();

  const { loading } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setCode(value);
  };

  const handleSubmit = () => {
    sendCodeNumber(Number(code)).catch(() => {
      toast({
        title: "Código inválido",
        description: "Favor inserir o código enviado via sms",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top"
      });
    });
    setCode("");
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box p="30px" flex="1" display="flex" flexDirection="column">
          <Text color="#F8774A" fontSize="2rem" fontWeight="bold">
            Te enviamos um código. Favor <br /> inseri-lo aqui
          </Text>
          <Box mt="20px">
            <Input
              placeholder="Digite o código de confirmação"
              maxLength={6}
              size="lg"
              type="number"
              value={code}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
          </Box>
          <Box mt="auto" mb="40px">
            <Button
              disabled={code.length !== 6}
              w="100%"
              onClick={handleSubmit}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CodeConfirmation;
