import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Casinha",
    description: "Casinha bonitinha",
    imageUrl:
      "https://i.pinimg.com/originals/a3/f0/82/a3f082684e2ecbe834b0d6d89525ff9c.jpg",
    address: "Rua 30 de fevereiro",
    location: {
      lat: 40.7484405,
      lgn: -73.7484405,
    },
    creator: "u1",
  },

  {
    id: "p2",
    title: "Casinha",
    description: "Casinha bonitinha",
    imageUrl:
      "https://i.pinimg.com/originals/a3/f0/82/a3f082684e2ecbe834b0d6d89525ff9c.jpg",
    address: "Rua 30 de fevereiro",
    location: {
      lat: 40.7484405,
      lgn: -73.7484405,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Local não encontrado!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Título"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Título inválido."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Descrição"
        validators={[VALIDATOR_MINLENGTH(1)]}
        errorText="Descrição inválida."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ATUALIZAR LOCAL
      </Button>
    </form>
  );
};

export default UpdatePlace;
