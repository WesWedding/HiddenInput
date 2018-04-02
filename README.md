Hidden Input Field

Use case: Webviews on iOS devices will ignore keyboard input unless an input field has focus.

It turns out that if that input field is disabled, you don't get unpleasant OS-level keyboard UI elements popping up.

It also turns out that the input field doesn't even need to be attached to the DOM for this trick to work! 
