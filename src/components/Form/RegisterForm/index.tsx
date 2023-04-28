import { useContext } from "react";
import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { FormRegisterContext } from "../../../Context/RegisterContext/RegisterContext";

const RegisterForm = () => {
  const { register, handleSubmit, submitRegisterForm, errors } =
    useContext(FormRegisterContext);

  return (
    <StyledForm onSubmit={handleSubmit(submitRegisterForm)}>
      <Input
        label="Nome"
        register={register("name")}
        type="text"
        error={errors.name?.message}
      />
      <Input
        label="Email"
        register={register("email")}
        type="email"
        error={errors.email?.message}
      />
      <Input
        label="Senha"
        register={register("password")}
        type="password"
        error={errors.password?.message}
      />
      <Input
        label="Confirmar senha"
        register={register("confirmPassword")}
        type="password"
        error={errors.confirmPassword?.message}
      />
      <StyledButton $buttonSize="default" $buttonStyle="gray">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
