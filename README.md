# Tourguide.js
Custom version of tourguides without icons
######  Simple, lightweight library for creating guided tours for your web, apps and more.

>  A **tour guide** is a  person who provides assistance, information on cultural, historical and  contemporary heritage to people on organized [tours](https://en.wikipedia.org/wiki/Tourism)  and individual clients at educational establishments, religious and  historical sites, museums, and at venues of other significant interest,  attractions sites. [[https://en.wikipedia.org/wiki/Tour_guide](https://en.wikipedia.org/wiki/Tour_guide)]


### Fiddle with It

Want to see how it works right away? [Try on JSFiddle](https://jsfiddle.net/eugenetrue/q465gb7L/) 

## Install Tourguide.js

```
npm i tourguidejs
```
## Why do I need Tourguide.js

Every time you build you next awesome web app, you sit back and stare lovingly at your handy-work :) But then inevitably someone comes along asking one and the same inconvenient question: *"So, how do I use it?"*

You try to explain, but people are just not getting it! You write [how-tos](https://docsie.io), [lengthy docs](https://docsie.io), and [step-by-step guides](https://docsie.io), and yet, nothing seems to be enough.

This is why we built **Tourguide.js** - a simple yet powerful explainer utility, designed to help you make the reply a little bit less painful. Because, let's face it - picture is worth a 1000 words:

![](https://cdn.docsie.io/tourgudie_demo.png)

## Getting started

There are a few ways you can use **Tourguide.js**

### Fiddle with it

Want to see how it works right away? [Try on JSFiddle](https://jsfiddle.net/eugenetrue/q465gb7L/) 

###  CommonJS

Download `tourguide.min.js`, add it to your project libraries, and then include it on page:

```
<script src="tourguide.min.js"></script>
```
### ES Module support

If you use ES modules in your project ([Webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org)) import **Tourguide.js** like so:

```
import Tourguide from "tourguidejs";
```
## Usage

Before use, **Tourguide.js** must be instantiated:

```
var tourguide = new Tourguide({options});
```
* `root`: root element the tour steps will attach to; default is document.body

* `selector`: if you want to use content based tour approach you can use this option to specify the common selector for the tour steps; default is `[data-tour]`

* `animationspeed`: speed of all tour built-in animations; default is 300

* `padding`: additional padding to add to step highlighter; default is 5(px)

* `steps`: if you choose to take JSON based tour approach provide use this property to provide the data; default is null

* `src`: if you want to load the tour from a remote URL you may specify it here; default is null

* `request`: if you want to load the tour from a remote URL you may provide request headers here

* `onStart`: callback function triggered when the tour starts

* `onStop`: callback function triggered when tour stops

* `onComplete`: callback triggered when tour completes

* `onStep`: callback triggered when a tour step is shown

* `onAction`: callback triggered when user clicks on the highlighted element

Once instantiated you can use tourguide instance a several different ways:

### Content based approach

Simplest approach is to read the descriptions right off the elements on page. This works best if you are using an [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) approach in your application. Simply add tour descriptions to the [HTML](https://en.wikipedia.org/wiki/HTML) elements in your page template:

```
<button aria-label="Collaborate" data-tour="step: 1; title: Step1; content: Lorem ipsum dolor sit amet">
  Collaborate
</button>
```
* `step<number>`: tour step sequence number

* `title<string>`: tour step title

* `content<string>`: tour step description

* `image?<url>`: tour step illustration

> **?*** indicates the property is optional*

In this mode you can simply use **Tourguide.js** as-is:

```
var tourguide = new Tourguide();
tourguide.start();
```
### JSON based approach

You may also write your own steps definition using [JSON](https://www.json.org/) notation:

```
`[`
`  {`
`    "selector": null,`
`    "step": 1,`
`    "title": "Lets take a moment and look around Docsie library",`
`    "content": "Click a button to advance to the next step of this tour.<br/> To stop this tour at any time click a button in the top-right corner.",`
`    "image": "https://somehost.com/image.jpeg"`
`  },`
`  {`
`    "selector": "[data-component=library]:first-of-type",`
`    "step": 2,`
`    "title": "Shelf",`
`    "content": "Just like a real library &lt;mark&gt;Docsie&lt;/mark&gt; starts with &lt;dfn&gt;shelves&lt;/dfn&gt;. Each &lt;dfn&gt;shelf&lt;/dfn&gt; represnts a separate collection of ideas. You may think of them as individual websites, or website sections."`
`  }`
`]`
```
* `selector?<string>`: [CSS selector](https://www.w3schools.com/cssref/css_selectors.asp) used to find the target element *(optional)*

* `step<number>`: tour step sequence number

* `title<string>`: tour step title

* `content<string>`: tour step description

* `image?<url>`: tour step illustration *(optional)*

> **?*** indicates the property is optional*

Once you have the complete JSON description for each of your tour steps you will have to initialize **Tourguide.js** passing your JSON as `steps:` property:

```
var steps = [...];
var tourguide = new Tourguide({steps: steps});
tourguide.start();
```
### Remote URL approach

You may also want to load the steps remotely. To do so simply provide the target `src` as one of the **Tourguide.js** init params:

```
var tourguide = new Tourguide({src: "https://somedomain.com/tours/guide.json"});
tourguide.start();
```
## Controlling the tour

Once your tour has started you have several ways to manually control the tour flow:

### tourguide.start([step])

Start the tour at any time by calling start(). You may optionally provide the step number to start the tour at a specific step (by default a tour always starts at step 1):

```
tourguide.start(2)
```
### tourguide.stop()

Stop the tour at any moment by calling stop()

### tourguide.next()

Causes tour to go to the next step in the sequence

### tourguide.previous()

Causes tour to go to the previous step in the sequence

### tourguide.go(step)

Causes tour to go to the step specified

```
tourguide.go(2)
```
### Additional properties

* `tourguide.currentstep`: returns the current [step object](#step_object)

* `tourguide.length`: return the number of steps on the tour

* `tourguide.steps`: returns the tour steps as JSON notation

* `tourguide.hasnext`: return true if there are steps remaining in the tour, otherwise returns false

* `tourguide.options`: returns **Tourguide.js** options object

## Attaching callbacks

**Tourguide.js** supports several helpful [callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) to help you better control the tour. You may optionally pass the callback functions into the tour instance at initialization time:

```
var tourguide = new Tourguide({
  `onStart:function(options){...},`
  `onStop:function(options){...},`
  `onComplete:function(){...},`
  `onStep:function(currentstep, type){...},`
  `onAction:function(currentstep, e){...}`
});
```
### onStart

Fires when the guided tour is started. The callback function will receive a single param:

* `options`: tour options object

### onStop

Fires when the guided tour stops. The callback function will receive a single param:

* `options`: tour options object

### onComplete

Fires when the guided tour is complete. The callback function will receives no params.

> NOTE: onStop is always fired first, before onComplete is fired

### onStep

Fires when tour step is activated. The callback function receives two params:

*  `currentstep`: tour [step object](#step_object)

* `type`: string representing the current direction of the tor; can be one of: "previous" | "next"

### onAction

Fires when user has clicked on the step target. The callback function receives two params:

* `currentstep`: tour [step object](#step_object)

* `event`: [MouseEvent onclick](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)

## Step object

Each step of the tour is wrapped into a Step class. This allows you to have a direct access to the individual step properties and actions:

* `target`: returns the target element step is attached to

* `el`: returns the step view element

* `show()`: show step element

* `hide()`: hide step element

You can obtain the current step object an any time during the tour execution by calling `tourguide.currentstep` property:

```
var currentstep = tourguide.currentstep;
var stepTarget = currentstep.target;
var stepView = currentstep.el;
```
## License

**Tourguide.js** is licensed under BSD 3-Clause "New" or "Revised" License

 A permissive license similar to the BSD 2-Clause License, but with a 3rd  clause that prohibits others from using the name of the project or its  contributors to promote derived products without written consent. 

