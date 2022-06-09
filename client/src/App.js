import React from 'react'
import { Container,AppBar, Typography,Grow,Grid} from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
const App = () => {
  const classess = useStyles();
  return (
    
      <Container maxWidth="lg">
        <AppBar  className={classess.appBar} position="static" color="inherit">
          <Typography  className = {classess.heading} variant="h2" align="center">College Memory</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container  jusity ="space-between"  alignItems="stretch" spacing={3}>
                <Grid item xs ={12} sm={6}>
                  <Posts/>
                </Grid>
                <Grid item xs ={12} sm={6}>
                  <Form/>
                </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
  )
}

export default App;
