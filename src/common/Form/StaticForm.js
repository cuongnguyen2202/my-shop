export const formSignUpData = {
  inputs: [
    {
      type: "text",
      name: "fullname",
      id: "fullname",
      placeholder: "Your Full name",
    },
    {
      type: "text",
      name: "email",
      id: "email",
      placeholder: "Email",
    },
    {
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Password",
      eye: true,
    },
    {
      type: "password",
      name: "cfpassword",
      id: "cfpassword",
      placeholder: "Confirm Password",
      eye: true,
    },
  ],
};
export const formSignInData = {
  inputs: [
    {
      type: "text",
      name: "email",
      id: "email",
      placeholder: "Email",
    },
    {
      type: "password",
      label: "Password",
      name: "password",
      id: "password",
      placeholder: "Password",
      eye: true,
    },
  ],
};
