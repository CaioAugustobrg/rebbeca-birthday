import {
  Container,
  AbsoluteCenter,
  Button,
  Input,
  FormControl,
  Stack,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import MyCarousel from "../../components/carousel";
import rebecca from "../../assets/rebecca.jpg";
import Untitled from "../../assets/Untitled.jpg";

const Login = () => {
  type IUserData = yup.InferType<typeof schema>;

  const schema = yup.object({
    name: yup
      .string()
      .max(64)
      .required("Preencha o campo com o seu nome completo."),
    cpf: yup
      .string()
      .email("")
      .required("Preencha o campo com um email válido."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IUserData) => {
    console.log("oi", data);
  };

  return (
    <Container
      backgroundColor={"#f05d9a"}
      flexDirection={"column"}
      width={"100vw"}
      height={"100vh"}
      p={0}
      m={0}
    >
      <AbsoluteCenter
        w={"auto"}
        h={"auto"}
        flexDirection={"column"}
        color="white"
      >
        
        <Flex>
          <Box
            style={{
              backgroundImage: `url(${rebecca})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // borderRadius: "8px",
              height: "70vh",
              width: "500px",
             
            }}
          ></Box>

          <Box m={'auto'} w={"650px"} h={"auto"} >
            <Box w={"100%"} m={"auto"} >
              <Stack textAlign={"center"}>
              <Text fontWeight={600} fontSize={50} w={"100%"}>
          Confirme sua presença até 28/04
        </Text>
                <Text  fontSize={"54px"}>
                  Rebbeca
                </Text>
                <Text  fontSize={"54px"}>
                  15 anos
                </Text>
              </Stack>
            </Box>

            <Box w={'auto'}>
              <FormControl
                h={"auto"}
                p={25}
                m={"auto"}
                backgroundColor={"#F6CED8"}
                borderRadius={"8px"}
                w={400}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  backgroundColor={"#fff"}
                  borderRadius={6}
                  w={"100%"}
                  h={50}
                  mb={10}
                  color={"#000"}
                  p={10}
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
                <Input
                  backgroundColor={"#fff"}
                  borderRadius={6}
                  w={"100%"}
                  h={50}
                  color={"#000"}
                  p={10}
                  placeholder="CPF"
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
                >
                  Confirmar
                </Button>
              </FormControl>
            </Box>
            <Text fontSize={18} m={15} textAlign={"center"}>
              Esse convite é individual e intransferível. Apenas convidados da
              lista terão acesso ao evento.
            </Text>
          </Box>
        </Flex>
      </AbsoluteCenter>
      {/* <MyCarousel /> */}
    </Container>
  );
};

export default Login;
