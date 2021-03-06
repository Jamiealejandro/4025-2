import React from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import myImg from './../assets/images/Roman_SPQR_banner.svg.png'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#E9967A',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#8B0000'
    }
  }
}))


export default function Home(){

  const classes = useStyles()
    return (
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Home Page

          </Typography>
          <CardMedia className={classes.media} image={myImg} title="My Image"/>
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"> S P Q R </Typography>
          <CardContent>
            <Typography variant="body1" component="p">
              ROMA AETERNA

            </Typography>
          </CardContent>
        </Card>
    )
}
