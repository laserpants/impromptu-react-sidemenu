# Impromptu React Side Menu

A side menu component for React. 

### What does it look like?

[Here](http://johanneshilden.github.io/impromptu-react-sidemenu) is an example. 

## Installation

Npm is the recommended install method.

    npm install impromptu-react-sidemenu

After installing, copy the public assets to your project folder.

    cp -r node_modules/impromptu-react-sidemenu/public/ .                                                             

A mimimal

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Impromptu React Side Menu</title>
    <link href="//cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" rel="stylesheet">
    <link href="public/css/impromptu.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <div class="impromptu-font-sans" id="anchor"></div>
    <script src="bundle.js"></script>
</body>
</html>
```

xx

## How to use

```
var React = require('react');
var Menu  = require('impromptu-react-sidemenu').Menu;
var Brand = require('impromptu-react-sidemenu').Brand;
var Item  = require('impromptu-react-sidemenu').Item;

var MenuComponent = React.createClass({
    handleClick: function(item) {
        switch (item) {
            case 0:
                // ... do stuff
                break;
            case 1:
            ...
        }
    },
    render: function() {
        return (
            &lt;Menu&gt;
                &lt;Brand onClick={this.handleClick.bind(null, 0)}&gt;
                    My menu is grandiose
                &lt;/Brand&gt;
                &lt;Item onClick={this.handleClick.bind(null, 1)}&gt;
                    Item #1
                &lt;/Item&gt;
                &lt;Item onClick={this.handleClick.bind(null, 2)}&gt;
                    Item #2
                &lt;/Item&gt;
                &lt;Item onClick={this.handleClick.bind(null, 3)}&gt;
                    Item #3
                &lt;/Item&gt;
            &lt;/Menu&gt;
        );
    }
});

React.render(
    &lt;MenuComponent /&gt;,
    document.getElementById('anchor')
);
```

```
var MenuComponent = React.createClass({
    render: function() {
        return (
            &lt;Menu&gt;
                &lt;Brand&gt;
                    &lt;a href="#item-1"&gt;My menu is grandiose&lt;/a&gt;
                &lt;/Brand&gt;
                &lt;Item&gt;
                    &lt;a href="#item-1"&gt;Item #1&lt;/a&gt;
                &lt;/Item&gt;
                &lt;Item&gt;
                    &lt;a href="#item-2"&gt;Item #2&lt;/a&gt;
                &lt;/Item&gt;
                &lt;Item&gt;
                    &lt;a href="#item-3"&gt;Item #3&lt;/a&gt;
                &lt;/Item&gt;
            &lt;/Menu&gt;
        );
    }
});
```

### HTML

## Props

| Property        | Type                     | Description   | Default      | 
| --------------- | ------------------------ | ------------- | ------------ |
| `width`         | Integer                  | Width of the menu, in pixels.  | 250         |
| `autoClose`     | Boolean                  | Controls whether the menu should automatically close when a menu item is clicked.      | false      |
| `position`      | 'left'&nbsp;&vert;&nbsp;'right'         | Position of the menu.     | 'right'            |
| `showDividers`  | Boolean                  | When true, this setting enables a visible line between menu items.     | false    |


<i style="font-size:3.2em; float:right;" class="ion-social-sass"></i>
## CSS

### Customization

```
/* Open button color values */
$button-open-bg           : rgba(0, 0, 0, 0.4);
$button-open-bg-active    : rgba(0, 0, 0, 0.7);
$button-open-fg           : rgb(255, 255, 255);

/* Close button color values */
$button-close-bg          : rgb(255, 255, 255);
$button-close-bg-active   : rgba(255, 255, 255, 0.7);
$button-close-fg          : rgb(51, 51, 51);

/* Menu color values */
$menu-background          : rgb(51, 51, 51);
$menu-text-base           : rgb(153, 153, 153);
$menu-text-active         : rgb(255, 255, 255);
$menu-selected-bg         : rgba(255, 255, 255, 0.2);
$menu-divider             : rgb(74, 74, 74);
```

## Contribute

Please, do! Like the old pythagorean proverb says; "Pull requests are welcome."

## License

Impromptu React Side Menu is provided under the BSD License.

#### Font Awesome

This project is distributed with the Font Awesome library. [Font Awesome](http://fontawesome.io/) is created and maintained by Dave Gandy. Fonts licensed under SIL OFL 1.1. Code licensed under MIT License.
