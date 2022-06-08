import React from "react";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  /* args: {
    children: 'Button'
  } */
};
/// version 5 approach .....

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

/// Version 6 Args Approach
const Template = (args) => <Button {...args} />;
export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary args",
};

// extended args
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Long Primary Args",
};