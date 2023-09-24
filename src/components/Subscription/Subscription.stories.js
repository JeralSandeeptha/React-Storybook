import React from "react";
import { Primary } from '../Button/Button.stories';
import { Small } from '../Input/Input.stories';
//we can import the stories from their story file

export default {
  title: "form/Subscription",
};

//we can export the story design
export const PrimarySubscription = () => {
    return (
        <>
            <Small/>
            <Primary/>
        </>
    );
}

