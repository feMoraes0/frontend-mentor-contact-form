<template>
  <main class="form-wrapper">
    <TitleAtom class="form-wrapper__title">Contact Us</TitleAtom>
    <form class="form" @submit="onSubmit">
      <fieldset class="form__fieldset form__fieldset--name">
        <InputMolecule
          label="First Name"
          input-name="first-name"
          v-model="inputsValue.firstName"
          :error-message="hasError('firstName') ? 'This field is required' : ''"
        />
        <InputMolecule
          label="Last Name"
          input-name="last-name"
          v-model="inputsValue.lastName"
          :error-message="hasError('lastName') ? 'This field is required' : ''"
        />
      </fieldset>
      <fieldset class="form__fieldset">
        <InputMolecule
          label="Email Address"
          input-name="email-input"
          v-model="inputsValue.email"
          :error-message="hasError('email') ? getEmailErrorMessage() : ''"
        />
      </fieldset>
      <fieldset class="form__fieldset">
        <QueryTypeOptionsMolecule
          @select="setQueryTypeValue"
          :error-message="
            hasError('queryType') ? 'Please select a query type' : null
          "
        />
      </fieldset>
      <fieldset class="form__fieldset">
        <InputMolecule
          label="Message"
          input-name="message"
          type="textarea"
          v-model="inputsValue.message"
          :error-message="hasError('message') ? 'This field is required' : ''"
        />
      </fieldset>
      <ConsentMolecule
        class="form__fieldset--consent"
        @click="toggleConsentValue"
        :has-error="hasError('consent')"
      />
      <ButtonAtom type="submit">Submit</ButtonAtom>
    </form>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import ButtonAtom from "./atoms/ButtonAtom.vue";
import TitleAtom from "./atoms/TitleAtom.vue";
import ConsentMolecule from "./molecules/ConsentMolecule.vue";
import InputMolecule from "./molecules/InputMolecule.vue";
import QueryTypeOptionsMolecule from "./molecules/QueryTypeOptionsMolecule.vue";

type InputsValueRefType = keyof typeof inputsValue.value;

const inputsValue = ref({
  firstName: "",
  lastName: "",
  email: "",
  queryType: "",
  message: "",
  consent: false,
});

const entriesWithErrors = ref<InputsValueRefType[]>([]);

const setQueryTypeValue = (entry: string) => {
  inputsValue.value.queryType = entry;
};

const toggleConsentValue = () => {
  inputsValue.value.consent = !inputsValue.value.consent;
};

const getEmailErrorMessage = () => {
  if (!inputsValue.value.email.trim()) {
    return "This field is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(inputsValue.value.email)) {
    return "Please enter a valid email address";
  }
  return null;
};

const hasError = computed(
  () =>
    (inputsValueRef: InputsValueRefType): boolean => {
      return entriesWithErrors.value.includes(inputsValueRef);
    },
);

const onSubmit = (event: { preventDefault: VoidFunction }) => {
  event.preventDefault();
  entriesWithErrors.value = [];
  for (const [key, value] of Object.entries(inputsValue.value)) {
    if (!value || (typeof value === "string" && value.trim() === "")) {
      entriesWithErrors.value.push(key as InputsValueRefType);
    }
  }
};
</script>

<style scoped lang="scss">
$min-tablet-width: 768px;
$min-desktop-width: 1440px;

.form-wrapper {
  padding: 24px;
  background-color: var(--white);
  border-radius: 16px;
  margin: 40px 16px;

  &__title {
    margin-bottom: 32px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    &__fieldset {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      border: none;

      &--name {
        gap: 24px;
      }

      &--consent {
        margin-top: 16px;
        margin-bottom: 40px;
      }
    }
  }
}

@media (width >= $min-tablet-width) {
  .form-wrapper {
    width: 690px;
    align-self: center;
    justify-self: center;
    margin: 0;
    padding: 40px;

    .form {
      &__fieldset {
        &--name {
          flex-direction: row;
        }
      }
    }
  }
}

@media (width >= $min-desktop-width) {
  .form-wrapper {
    width: 736px;
  }
}
</style>
