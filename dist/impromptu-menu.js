'use strict';

var React = require('react');

var Item = React.createClass({
    displayName: 'Item',

    render: function render() {
        return null;
    }
});

var Brand = React.createClass({
    displayName: 'Brand',

    render: function render() {
        return null;
    }
});

var Menu = React.createClass({
    displayName: 'Menu',

    getInitialState: function getInitialState() {
        return {
            visible: false
        };
    },
    toggle: function toggle() {
        this.setState({
            visible: !this.state.visible
        });
    },
    position: function position() {
        var pos = this.props.position;
        switch (pos) {
            case 'left':
            case 'right':
                return pos;
            default:
                return 'right';
        }
    },
    buttonStyles: function buttonStyles() {
        var styles = {};
        styles[this.position()] = 0;
        return styles;
    },
    wrapperStyles: function wrapperStyles() {
        var width = this.props.width || 250;
        var styles = {
            width: width
        };
        var position = this.position();
        var capitalized = position.substr(0, 1).toUpperCase() + position.substr(1);
        styles['margin' + capitalized] = '-' + width;
        styles[position] = this.state.visible ? width : 0;
        return styles;
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                { style: this.buttonStyles(), onClick: this.toggle, className: 'button-open toggle impromptu-toggle-open' },
                React.createElement('i', { className: 'fa fa-bars' })
            ),
            React.createElement(
                'nav',
                { style: this.wrapperStyles(), className: 'impromptu-menu-wrapper' },
                React.createElement(
                    'ul',
                    { className: 'sidebar-nav' + (this.props.showDividers ? ' impromptu-divider' : ''), style: { width: this.props.width || 250 } },
                    React.createElement(
                        'a',
                        { onClick: this.toggle, className: 'button-close pull-right toggle' },
                        React.createElement('i', { className: 'fa fa-times' })
                    ),
                    React.Children.map(this.props.children, (function (item) {
                        var onClick = function onClick() {
                            if ('function' === typeof item.props.onClick) item.props.onClick();
                            if (true === this.props.autoClose) this.toggle();
                        };
                        if (item.type === Brand) {
                            return React.createElement(
                                'li',
                                { onClick: onClick.bind(this), className: 'sidebar-brand' },
                                React.createElement(
                                    'span',
                                    null,
                                    item.props.children
                                )
                            );
                        } else if (item.type === Item) {
                            return React.createElement(
                                'li',
                                { onClick: onClick.bind(this) },
                                React.createElement(
                                    'span',
                                    null,
                                    item.props.children
                                )
                            );
                        } else {
                            return item;
                        }
                    }).bind(this))
                )
            )
        );
    }
});

module.exports = {
    Menu: Menu,
    Brand: Brand,
    Item: Item
};

//# sourceMappingURL=impromptu-menu.js.map