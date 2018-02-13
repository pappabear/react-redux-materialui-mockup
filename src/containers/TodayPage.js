import React, {Component} from 'react';
import {Link} from 'react-router';
import Checkbox from 'material-ui/Checkbox';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey400} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import Data from '../data';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


class TodayPage extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick()
  {
    console.log("checkbox clicked");
  }

  render() 
  {
    
    const styles = {
      floatingActionButton: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
      }
    };
  
    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltipPosition="bottom-left"
      >
          <MoreVertIcon color={grey400} />
      </IconButton>
    );
  
    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Delete</MenuItem>
      </IconMenu>
    );
  
    return (
        <PageBase title="TODAY"
                  navigation="Application / Table Page">
            <List>
              {Data.today.tasks.map(task =>
                <div key={task.id}>
                        <ListItem 
                          rightIconButton={rightIconMenu}
                          >
                            <Checkbox
                                label={task.subject}
                                checked={task.is_complete}
                                style={styles.checkbox}
                                rightIconButton={rightIconMenu}
                                onClick={this.handleClick}
                            />
                        </ListItem>
                        <Divider inset={true} />
                </div>
            )}
            </List>
            <div>
                <Link to="/form" >
                  <FloatingActionButton 
                    style={styles.floatingActionButton} 
                    backgroundColor={pink500}
                    >
                        <ContentAdd />
                        </FloatingActionButton>
                </Link>
            </div>
        </PageBase>
  );
}
}

export default TodayPage;