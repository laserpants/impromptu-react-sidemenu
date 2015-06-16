var React = require('react');

var Item = React.createClass({
    render: function() { return null; }
});

var Brand = React.createClass({
    render: function() { return null; }
});

var Menu = React.createClass({
    getInitialState: function() {
        return {
            visible: false
        };
    },
    toggle: function() {
        this.setState({
            visible: !this.state.visible
        });
    },
    position: function() {
        var pos = this.props.position;
        switch (pos) {
            case 'left':
            case 'right':
                return pos;
            default:
                return 'right';
        }
    },
    buttonStyles: function() {
        var styles = {};
        styles[this.position()] = 0;
        return styles;
    },
    wrapperStyles: function() {
        var width = this.props.width || 250;
        var styles = {
            width: width
        };
        var position = this.position();
        var capitalized = position.substr(0, 1).toUpperCase() + position.substr(1);
        styles['margin' + capitalized] = '-' + width;
        styles[position] = (this.state.visible ? width : 0);
        return styles;
    },
    render: function() {
        return (
            <div>
                <a style={this.buttonStyles()} onClick={this.toggle} className="button-open toggle impromptu-toggle-open">
                    <i className="fa fa-bars"></i>
                </a>
                <nav style={this.wrapperStyles()} className='impromptu-menu-wrapper'>
                    <ul className={'sidebar-nav' + (this.props.showDividers ? ' impromptu-divider' : '')} style={{width: this.props.width || 250}}>
                        <a onClick={this.toggle} className="button-close pull-right toggle">
                            <i className="fa fa-times"></i>
                        </a>
                        {React.Children.map(this.props.children, function(item) {
                            var onClick = function() {
                                if ('function' === typeof item.props.onClick)
                                    item.props.onClick();
                                if (true === this.props.autoClose)
                                    this.toggle();
                            };
                            if (item.type === Brand) {
                                return (
                                    <li onClick={onClick.bind(this)} className="sidebar-brand">
                                        <span>{item.props.children}</span>
                                    </li>
                                );
                            } else if (item.type === Item) {
                                return (
                                    <li onClick={onClick.bind(this)}>
                                        <span>{item.props.children}</span>
                                    </li>
                                );
                            } else {
                                return item;
                            }
                        }.bind(this))}
                    </ul>
                </nav>
            </div>
        );
    }
});

module.exports = {
    Menu  : Menu,
    Brand : Brand,
    Item  : Item
};
