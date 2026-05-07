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

      <fieldset class="form__fieldset form__fieldset--query">
        <QueryTypeOptionsMolecule />
      </fieldset>
      <fieldset class="form__fieldset">
        <InputMolecule label="Message" input-name="message" type="textarea" />
      </fieldset>
      <fieldset class="form__fieldset--consent">
        <ConsentMolecule />
      </fieldset>
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
      gap: 8px;
      margin-bottom: 24px;
      border: none;

      &--name {
        gap: 24px;
      }

      &--query {
        &__input {
          padding: 12px 24px;
          border-width: 1px;
          border-style: solid;
          border-color: var(--grey-500);
          border-radius: 8px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          cursor: pointer;

          &:first-child {
            margin-bottom: 16px;
          }

          label {
            font-size: 18px;
            line-height: 150%;
            letter-spacing: 0;
            font-weight: 400;
            cursor: inherit;
          }
        }
      }

      &--consent {
        border: none;
        margin-top: 16px;
        margin-bottom: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: stretch;
        gap: 16px;
        padding-right: 36px;

        input {
          height: 24px;
          width: 24px;
        }

        label {
          font-size: 16px;
          line-height: 150%;
          letter-spacing: 0;
          font-weight: 400;

          &::after {
            content: "*";
            color: var(--green-600);
          }
        }
      }

      label {
        color: var(--grey-900);
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0;
        font-weight: 400;

        &::after {
          content: "*";
          color: var(--green-600);
        }
      }

      input,
      textarea {
        border-width: 1px;
        border-style: solid;
        border-color: var(--grey-500);
        background-color: var(--white);
        border-radius: 8px;
        padding: 12px 24px;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0;
        font-weight: 400;
        color: var(--grey-900);
        cursor: pointer;

        &:hover {
          border-color: var(--green-600);
        }
      }

      textarea {
        resize: none;
        min-height: 295px;
      }
    }

    button {
      background-color: var(--green-600);
      border: 1px solid var(--green-600);
      padding: 16px 0;
      border-radius: 8px;
      color: var(--white);
      font-weight: bold;
      line-height: 150%;
      font-size: 18px;
      letter-spacing: 0;
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

        &--query {
          &__options {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;
          }

          &__input {
            flex: 1;
            &:first-child {
              margin-bottom: 0;
            }
          }
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
