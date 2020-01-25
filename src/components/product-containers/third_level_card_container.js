import React from 'react';
import Grid from '@material-ui/core/Grid';
import ThirdLevelCard from 'components/products/third_level_card';

export default class ThirdLevelCardContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      thridLevelProducts: [
        {
          id: 1,
          name: '手機教學',
          description: 'This is product description,This is product description,This is product description,This is product description,This is product description,This is product description'
        },
        {
          id: 2,
          name: '電腦教學',
          description: 'This is product description,This is product description,This is product description,This is product description,This is product description,This is product description'
        },
        {
          id: 3,
          name: '地板教學',
          description: 'This is product description,This is product description,This is product description,This is product description,This is product description,This is product description'
        },
        {
          id: 4,
          name: 'hiphop教學',
          description: 'This is product description,This is product description,This is product description,This is product description,This is product description,This is product description'
        },
    ]};
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container justify="left" spacing={2}>
            {
              this.state.thridLevelProducts.map(info => (
                <Grid key={info.id} item xs={12} sm={4} md={4}>
                  <ThirdLevelCard productInfo={info} />
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
    );
  }
}