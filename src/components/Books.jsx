import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { connect } from 'react-redux';

const styles = theme => ({
  layout: {
    width: '600px',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    display: 'flex',
  },
  cardDetail: {
      display: 'flex',
      flexDirection: 'column',
  },
  cardMedia: {
    margin: theme.spacing.unit * 2,
    height: '310px',
    width: '250px',
  },
  cardContent: {
    marginLeft: theme.spacing.unit * 5,
    width: '400px',
  },
  action: {
      align: 'bottom',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [
  {
    img: "//img10.360buyimg.com/n1/jfs/t28996/317/185501197/59681/3c7e1ade/5bea770cNce1ad221.jpg",
    title: "Go 语言实战",
    subTitle: `  作为学习Go语言的入门书籍，非常适合Go语言的初学者。起初，想学习Go语言，就是读的这本书，看完之后非常有帮助。整体上内容不多，但是包含了入门需要的重点知识。`,
    href: "https://pan.baidu.com/s/1iLNSfPR_qiq9XAw4FxysjA",
    code: "7i4p",
  },
  {
    img: "//img12.360buyimg.com/n1/jfs/t14041/131/1394076398/260731/c200a40e/5a1f647aNe56a9273.jpg",
    title: "Go Web 编程",
    subTitle: "熟悉Go语言的基础语法之后，想使用Go开发Web应用的人，推荐读下这本书。书中完整的介绍了基于Go 语言标准库开发Web应用所需要的知识。",
    href: 'https://pan.baidu.com/s/1MWuScaCblRv-8QGSZKIH8Q',
    code: 'cqyk',
  }
];

function Projects(props) {
  const { classes, user } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40} justify='center'>
            {cards.map(card => (
              <Grid item key={card} >
                <Card className={classes.card}>
                 <CardMedia
                    className={classes.cardMedia}
                    image={card.img} // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.subTitle}
                    </Typography>

                    <CardActions className={classes.action}>
                    <Link underline='none' target='_blank' href={card.href}>
                      <Button size="small" color="primary">
                        下载地址
                      </Button>
                      <Typography>
                      提取码: { user === null ? '登录后可见' : card.code }
                      </Typography>
                    </Link>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
})

const ProjectsContainer = connect(
  mapStateToProps,
  null
)(withStyles(styles)(Projects))

export default ProjectsContainer