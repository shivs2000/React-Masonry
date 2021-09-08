import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import axios from 'axios';
import {
AppBar,
Toolbar,
Typography,
Button,
makeStyles,
Card,
CardContent,




}from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom:30
    },
    
    title: {
      flexGrow: 1,
    },
    cardtitle: {
        fontSize: 14,
      },
      postContainer:{
          padding:30,
          margin:20
      }
  }));

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
function Layout(props) {
    const [posts,Setposts]=useState(null);


    useEffect(()=>{
   axios.get('https://jsonplaceholder.typicode.com/posts')
     .then((res)=>{
         Setposts(res.data);

     })
     .catch((e)=>{
         console.log(e);
     })
 

    },[])
const classes=useStyles();

   
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                      <Toolbar>
          
                   <Typography variant="h6" className={classes.title}>
                                    News
                   </Typography>
                      <Button color="inherit">Login</Button>
                    </Toolbar>
                 </AppBar>
         </div>
         <div className={classes.postContainer}>
            
         <Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  {/* array of JSX items */}

            {
                posts.map((p)=>(<>
                <Card>
                    <CardContent>
                    <Typography className={classes.cardtitle} color="textSecondary" gutterBottom>
                            Word of the Day
                   </Typography>
                   <Typography>
                       {p.body}
                   </Typography>
                    </CardContent>
                </Card>
                
                
                </>))
            }
            </Masonry>
         </div>
        </div>
    );
}

export default Layout;