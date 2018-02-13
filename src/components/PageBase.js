import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import globalStyles from '../styles';

class PageBase extends Component {

    render() 
    {
    
      const {title} = this.props;

      return (

        <div>
          <Paper style={globalStyles.paper}>
            <h3 style={globalStyles.title}>{title}</h3>

            <Divider/>
            {this.props.children}

            <div style={globalStyles.clear}/>

          </Paper>
        </div>
      );
    }
}

export default PageBase;
