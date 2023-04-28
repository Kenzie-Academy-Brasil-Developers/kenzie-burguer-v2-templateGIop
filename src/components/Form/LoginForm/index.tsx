import { useContext } from "react";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { FormLoginContext } from "../../../Context/LoginContext/LoginContext";
import Input from "../Input";

const LoginForm = () => {
  const { register, submitLoginForm, handleSubmit, errors } =
    useContext(FormLoginContext);

  return (
    <StyledForm onSubmit={handleSubmit(submitLoginForm)}>
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
      <StyledButton type="submit" $buttonSize="default" $buttonStyle="green">
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
