import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default class ThirdLevelCard extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.productInfo.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.productInfo.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}