var React = require('react');
var Menu  = require('../modules/impromptu-sidemenu.jsx').Menu;
var Brand = require('../modules/impromptu-sidemenu.jsx').Brand;
var Item  = require('../modules/impromptu-sidemenu.jsx').Item;

var LeftMenu = React.createClass({
    render: function() {
        return (
            <Menu showDividers={true} position='left' autoClose={true}>
                <Brand><a href="#">Left menu</a></Brand>
                <Item><a href="#installation">Installation</a></Item>
                <Item><a href="#how-to-use">How to use</a></Item>
                <Item><a href="#props">Props</a></Item>
                <Item><a href="#css">CSS</a></Item>
                <Item><a href="#contribute">Contribute</a></Item>
                <Item><a href="#license">License</a></Item>
                <Item><a href="#github"><i className="ion-social-github"></i></a></Item>
            </Menu>
        );
    }
});

var RightMenu = React.createClass({
    handleClick: function(item) {
        switch (item) {
            case 1:
                window.location.hash = 'installation';
                break;
            case 2:
                window.location.hash = 'how-to-use';
                break;
            case 3:
                window.location.hash = 'props';
                break;
            case 4:
                window.location.hash = 'css';
                break;
            case 5:
                window.location.hash = 'contribute';
                break;
            case 6:
                window.location.hash = 'license';
                break;
            case 7:
                window.location.hash = 'github';
                break;
             default:
                window.location.hash = '';
        }
    },
    render: function() {
        return (
            <Menu showDividers={false} position='right'>
                <Brand><a href="#">Right menu</a></Brand>
                <Item onClick={this.handleClick.bind(null, 1)}>Installation</Item>
                <Item onClick={this.handleClick.bind(null, 2)}>How to use</Item>
                <Item onClick={this.handleClick.bind(null, 3)}>Props</Item>
                <Item onClick={this.handleClick.bind(null, 4)}>CSS</Item>
                <Item onClick={this.handleClick.bind(null, 5)}>Contribute</Item>
                <Item onClick={this.handleClick.bind(null, 6)}>License</Item>
                <Item onClick={this.handleClick.bind(null, 7)}><i className="ion-social-github"></i></Item>
            </Menu>
        );
    }
});

React.render(
    <LeftMenu />,
    document.getElementById('left')
);

React.render(
    <RightMenu />,
    document.getElementById('right')
);

