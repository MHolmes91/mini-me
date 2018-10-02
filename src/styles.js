export default {
  body: {
    'color': '#CCCCCC',
    'background-color': '#111111'
  },
  header: {
    'display': 'flex',
    'flex-flow': 'row wrap',
    'justify-content': 'space-around',
    'margin': '32px 16px 96px 16px'
  },
  headerText: {
    'max-width': '75%',
    'margin': '0px 32px 32px 0px'
  },
  headerPicture: {  //Yuno
    '& img': {
      'border-radius': '50%'
    }
  },
  portfolio: {
    'display': 'flex',
    'flex-flow': 'row wrap',
    'justify-content': 'space-around',
  }
/*
  .portfolio__element{
    display: block;
    padding: 32px;
  }

  .portfolio__element:not(.portfolio__element--github):hover .portfolio__element__icon,
  .portfolio__element:not(.portfolio__element--github):active .portfolio__element__icon{
    background-color: #ee22ee;
    transition: all  0.3s ease-in 0.1s;
  }

  //Github has its own circle
  .portfolio__element--github .portfolio__element__icon{
    width: 128px;
    height: 128px;
    text-align: center;
    padding: 0;
    border-radius: 0;
    color: white;
    background-color: initial;
  }

  .portfolio__element--github:hover .portfolio__element__icon,
  .portfolio__element--github:active .portfolio__element__icon{
    color: #ee22ee;
    transition: all 0.3s ease-in 0.1s;	//Size transitions must be done differently
  }

  .portfolio__element--github .portfolio__element__icon i{
    font-size: 128px;
  }

  .portfolio__element__icon{
    background-color: white;
    color: #111111;
    width: 70px;
    height: 70px;
    padding: 29px;
    border-radius: 50%;
    text-align: center;
  }

  .portfolio__element__icon > i{
    font-size: 70px;
  }*/
};