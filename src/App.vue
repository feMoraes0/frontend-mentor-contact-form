<template>
  <main class="form-wrapper">
    <TitleAtom class="form-wrapper__title">Contact Us</TitleAtom>
    <form action="" class="form">
      <fieldset class="form__fieldset form__fieldset--name">
        <InputMolecule label="First Name" input-name="first-name" />
        <InputMolecule label="Last Name" input-name="last-name" />
      </fieldset>
      <fieldset class="form__fieldset">
        <InputMolecule
          label="Email Address"
          input-name="email-input"
          type="email"
        />
      </fieldset>
      <fieldset class="form__fieldset">
        <QueryTypeOptionsMolecule />
      </fieldset>
      <fieldset class="form__fieldset">
        <InputMolecule label="Message" input-name="message" type="textarea" />
      </fieldset>
      <ConsentMolecule class="form__fieldset--consent" />
      <ButtonAtom type="submit">Submit</ButtonAtom>
    </form>
  </main>
</template>

<script setup lang="ts">
import ButtonAtom from "./atoms/ButtonAtom.vue";
import TitleAtom from "./atoms/TitleAtom.vue";
import ConsentMolecule from "./molecules/ConsentMolecule.vue";
import InputMolecule from "./molecules/InputMolecule.vue";
import QueryTypeOptionsMolecule from "./molecules/QueryTypeOptionsMolecule.vue";
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
