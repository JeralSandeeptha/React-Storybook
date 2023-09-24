import React from "react";
import Button from './Button';
import Center from "../Center/Center";

//export the main component
//we can give a title in UI playground
//we can also manage folders like this
export default {
  title: 'buttons/Button',
  component: Button,
  args: {
    children: 'Text'
  },
  //using decorators
  decorators: [ story => <Center>{story}</Center> ]
}

//export the stories of related component
export const Primary = () => <Button varient='primary'>Primary</Button>
export const Secondary = () => <Button varient='secondary'>Secondary</Button>
export const Success = () => <Button varient='success'>Success</Button>
export const Danger = () => <Button varient='danger'>Danger</Button>

// Also we can change the input element name as we want 

///////
///////
///////
///////
///////
//we can write the stories using args also
const Template = (args) => <Button {...args}/>

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  varient: 'primary',
  children: 'Primary Args'
}

export const PrimaryB = Template.bind({});
PrimaryB.args = {
  varient: 'secondary',
  children: 'Secondary Args'
}