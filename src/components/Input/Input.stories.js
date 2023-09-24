import React from "react";
import Input from './Input';

//export the main component
//we can give a title in UI playground
//we can also manage folders like this
export default {
    title: "form/Input",
    component: Input
}

//export the stories of related component
export const Small = () => <Input size='small' placeholder='small'/>
export const Medium = () => <Input size='medium' placeholder='medium'/>
export const Large = () => <Input size='large' placeholder='large'/>

// we can change the input element name as we want
Small.storyName = 'Small Input';
Medium.storyName = 'Medium Input';
Large.storyName = 'Large Input';