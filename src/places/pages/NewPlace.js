import React, { useContext } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./PlaceForm.css";

const NewPlace = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient;
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        "http://localhost:5000/api/places",
        "POST",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          address: formState.inputs.address.value,
          creator: auth.userId,
        }),
        { " Content-Type": "application/json" }
      );
      // Redirect.
    } catch (err) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <form className="place-form" onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          element="textarea"
          type="text"
          label="Título"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Título inválido."
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Descrição"
          validators={[VALIDATOR_MINLENGTH(1)]}
          errorText="Descrição inválida."
          onInput={inputHandler}
        />
        <Input
          id="address"
          element="input"
          label="Endereço"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Endereço inválido."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADICIONAR LOCAL
        </Button>
      </form>
    </>
  );
};

export default NewPlace;
