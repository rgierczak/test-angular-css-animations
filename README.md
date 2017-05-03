# test-angular-css-animations

> The application shows how to style Angular app with pure CSS properties available also out of the framework.

## Installation

```
$ npm install
```

## Usage

```
$ ng serve
```

Run the project in your browser

```
localhost:4200
```

## CSS Properties used in the project

### CSS Transition

```
div {
   transition: width 0.3s ease-out;
}
```

Whenever the width of `<div>` changes, the change is going to get animated over 0.3 seconds (with an ease-out timing function). The CSS transition property allows to transition between one property state to another.

### CSS Animation

```
div {
   animation: animate 0.2s ease-in forwards;
}

keyframes animate {
   0% {
      opacity: 0
   }
   100% {
      opacity: 1
   }
}
```

The CSS animation property can be used to do the same as CSS transition, but also can be used for much more complex animations. The animations to animate are defined as keyframes. 
