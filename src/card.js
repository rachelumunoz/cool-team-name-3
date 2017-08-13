import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

class PackCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Pack Name"
          subtitle="created by: Ian Judson"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
          />
        </CardText>
        <CardTitle title="Pack Name" subtitle="created by: Ian Judson" expandable={true} />
        <CardText expandable={true}>
          <MenuItem> Item 1 </MenuItem>
          <MenuItem> Item 2 </MenuItem>
          <MenuItem> Item 3 </MenuItem>
          <MenuItem> Item 4 </MenuItem>
        </CardText>
      </Card>
    );
  }
}

export default PackCard;



