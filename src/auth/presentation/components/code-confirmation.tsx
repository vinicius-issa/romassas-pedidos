import React from "react";
import { Box, Text, Input, Button } from "@reverb-ui/react";

const CodeConfirmation = () => {
  return (
    <Box p="30px" flex="1" display="flex" flexDirection="column">
      <Text color="#F8774A" fontSize="2rem" fontWeight="bold">
        Te enviamos um código. Favor <br /> inseri-lo aqui
      </Text>
      <Box mt="20px">
        <Input
          placeholder="Digite o código de confirmação"
          maxLength={14}
          size="lg"
          type="tel"
        />
      </Box>
      <Box mt="auto" mb="40px">
        <Button w="100%">Enviar</Button>
      </Box>
    </Box>
  );
};

export default CodeConfirmation;
