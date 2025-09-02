<template>
  <main>
    <h1>Contact Us</h1>
    <form action="" class="form">
      <fieldset class="form__fieldset form__fieldset--name">
        <div>
          <label for="first-name-input">First Name </label>
          <input
            id="first-name-input"
            name="first-name-input"
            type="text"
            required
          />
        </div>
        <div>
          <label for="last-name-input">Last Name </label>
          <input
            id="last-name-input"
            name="last-name-input"
            type="text"
            required
          />
        </div>
      </fieldset>
      <fieldset class="form__fieldset">
        <label for="email-input">Email Address </label>
        <input id="email-input" name="email-input" type="email" required />
      </fieldset>
      <fieldset class="form__fieldset form__fieldset--query">
        <label>Query Type </label>
        <div class="form__fieldset--query__options">
          <div class="form__fieldset--query__input">
            <input
              id="query-input-general"
              name="query-input"
              type="checkbox"
              required
            />
            <label for="query-input-general">General Enquiry</label>
          </div>
          <div class="form__fieldset--query__input">
            <input
              id="query-input-support"
              name="query-input"
              type="checkbox"
              required
            />
            <label for="query-input-support">Support Request</label>
          </div>
        </div>
      </fieldset>
      <fieldset class="form__fieldset">
        <label for="message-input">Message </label>
        <textarea id="message-input" name="message-input" required></textarea>
      </fieldset>
      <fieldset class="form__fieldset--consent">
        <input
          type="checkbox"
          name="consent-input"
          id="consent-input"
          required
        />
        <label for="consent-input">
          I consent to being contacted by the team
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </main>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>

<style scoped lang="scss">
$min-tablet-width: 768px;
$min-desktop-width: 1440px;

main {
  padding: 24px;
  background-color: var(--white);
  border-radius: 16px;
  margin: 40px 16px;

  h1 {
    color: var(--grey-900);
    font-weight: bold;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -1px;
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

        & div {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
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
  main {
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
  main {
    width: 736px;
  }
}
</style>
