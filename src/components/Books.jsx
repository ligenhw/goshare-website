import React from 'react';
import PropTypes from 'prop-types';
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
  cardGrid: {
    width: '600px',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(1100 + theme.spacing(3 * 2))]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    padding: theme.spacing(8),
  },
  card: {
    display: 'flex',
  },
  cardDetail: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    margin: theme.spacing(2),
    height: '310px',
    width: '250px',
  },
  cardContent: {
    marginLeft: theme.spacing(5),
    width: '400px',
  },
  action: {
    align: 'bottom',
  },
});

const cards = [
  {
    img: "//img10.360buyimg.com/n1/jfs/t28996/317/185501197/59681/3c7e1ade/5bea770cNce1ad221.jpg",
    title: "Go 语言实战",
    subTitle: `  Go语言结合了底层系统语言的能力以及现代语言的高级特性，旨在降低构建简单、可靠、高效软件的门槛。本书向读者提供一个专注、全面且符合语言习惯的视角。Go语言实战同时关注语言的规范和实现，涉及的内容包括语法、类型系统、并发、管道、测试，以及其他一些主题。`,
    href: "https://pan.baidu.com/s/1iLNSfPR_qiq9XAw4FxysjA",
    code: "7i4p",
  },
  {
    img: "//img12.360buyimg.com/n1/jfs/t14041/131/1394076398/260731/c200a40e/5a1f647aNe56a9273.jpg",
    title: "Go Web 编程",
    subTitle: "本书全面介绍使用Go语言开发Web应用所需的全部基本概念，并详细讲解如何运用现代设计原则使用Go语言构建Web应用。本书通过大量的实例介绍核心概念（如处理请求和发送响应、模板引擎和数据持久化），并深入讨论更多高级主题（如并发、Web应用程序测试以及部署到标准系统服务器和PaaS提供商）。",
    href: 'https://pan.baidu.com/s/1MWuScaCblRv-8QGSZKIH8Q',
    code: 'cqyk',
  }
];

function Projects(props) {
  const { classes, user } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container className={classes.cardGrid} spacing={5} justify='center'>
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
                      提取码: {user === null ? '登录后可见' : card.code}
                    </Typography>
                  </Link>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
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