import {
  Button,
  Input,
  Stack,
  Box,
  Text,
  useToast
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import rebecca from "../../assets/rebecca.jpg";

import { DOCUMENT_REGEX } from "../../constants";
import apiService from "../../services/api";

const Login = () => {
  const toast = useToast()

  type IUserData = yup.InferType<typeof schema>;

  const schema = yup.object({
    name: yup.string().max(64).required("Preencha o campo com o seu nome completo."),
    cpf: yup.string().matches(DOCUMENT_REGEX, "Preencha o campo com um CPF válido.").required("Preencha o campo com um CPF válido.").length(11, 'O CPF tem 11 dígitos')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>({
    resolver: yupResolver(schema),
  });
  const loginSubmit = async (data: IUserData) => {

    const { name, cpf } = data;
  
    const loginPromise = new Promise((resolve, reject) => {
      apiService.post('/user/create', { name, cpf })
        .then((response) => {
          resolve(response.data); 
        })
        .catch((error) => {
          
          if (error.response && error.response.data) {
            reject(new Error(error.response.data)); 
          } else {
            reject(new Error("Falha na confirmação. Tente novamente mais tarde"));
          }
        });
    });
  
    toast.promise(loginPromise, {
      success: { title: 'Confirmação concluída com sucesso', description: 'Te vejo lá 😊!' },
      error: (error) => ({
        title: 'Erro durante o procedimento',
        description: error.message,
      }),
      loading: { title: 'Processando...', description: 'Aguarde' },
    })
  };
  
  
  return (

      <Box
      width="100%"
      height="100vh"
      minHeight="100vh"
      overflowY="auto"
      display="flex"
        backgroundColor={"#f05d9a"}
        flexDirection={"column"}
        color="white"
      >
        <Box flexDirection={"column"}>
          <Image
            boxShadow={"0 0 20px #fff"}
            border={"5px solid #fff"}
            borderRadius={"8px"}
            mb={"auto"}
            ml={"auto"}
            mr={"auto"}
            w={490}
            h={"auto"}
            src={rebecca}
            alt="Dan Abramov"
          />

          <Box m={"auto"} h={"auto"}>
            <Stack textAlign={"center"}>
              <Box m={"auto"}>
                <Text fontWeight={600} fontSize={50} w={"100%"}>
                  Confirme sua presença até 28/04
                </Text>
              </Box>
              <Text fontSize={"54px"}>Rebbeca</Text>
              <Text fontSize={"54px"}>15 anos</Text>
            </Stack>

            <Box m={'auto'} w={"360px"}>
              <form
                style={{
                  height: "auto",
                  padding: "25px",
                  marginRight: "5%",
                  marginLeft: "5%",
                  backgroundColor: "#F6CED8",
                  borderRadius: "8px",
                  width: "90%",
                }}
                onSubmit={handleSubmit(loginSubmit)}
              >
              <Text fontSize={20}>Insira seu nome completo</Text>
                <Input
                  backgroundColor={"#fff"}
                  borderRadius={6}
                  w={"100%"}
                  h={10}
                  mb={2}
                  color={"#000"}
                  p={5}
                  placeholder="Nome"
                  {...register("name")}
                />
                {errors.name && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {errors.name.message}
                  </p>
                )}
                 <Text fontSize={20}>Insira somente os digítos do seu CPF</Text>
                <Input
                  backgroundColor={"#fff"}
                  borderRadius={6}
                  w={"100%"}
                  h={10}
                  color={"#000"}
                  p={5}
                  
                  mb={2}
                  placeholder="CPF (somente digítos)"
                  type="text"
                  {...register("cpf")}
                />
                {errors.cpf && (
                  <Text
                    style={{
                      color: "red",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {errors.cpf.message}
                  </Text>
                )}
                <Button
                  p={8}
                  mt={15}
                  height={50}
                  width={"100%"}
                  borderRadius={"8px"}
                  color={"#000"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                  backgroundColor={"#B2E2D6"}
                  _hover={{ backgroundColor: "#D3B8E2" }}
                  type="submit"
                >
                  Confirmar
                </Button>
              </form>
            </Box>
            <Box m={"auto"} w={"70%"}>
              <Text w={"100%"} fontSize={18} mt={15} textAlign={"center"}>
                Essa confirmação é individual e intransferível. Apenas convidados da
                lista confirmados terão acesso ao evento.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
  
  );
};

export default Login;
