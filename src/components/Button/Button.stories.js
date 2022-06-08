import React from "react";
import Button from "./Button";
import Center from "../Center/Center";
export default {
  title: "Form/Button",
  component: Button,
  decorators: [(story) => <Center>{story()}</Center>],
  /* args: {
    children: 'Button'
  } */
};
/// version 5 approach .....

export const Primary = () => (
  <Center>
    <Button variant="primary">Primary</Button>
  </Center>
);
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
