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
    img: "//img13.360buyimg.com/n1/jfs/t12760/325/2026027119/30837/eb145850/5a30cc28Ncba23a2e.jpg",
    title: "goshare",
    subTitle: `Kotlin in Action 教你将 Kotlin 语言用于生产级应用。写给有经验的 Java 开发者的示例丰富的这本书比大多数语言书籍更深入，其中涵盖了一些有趣的话题，例如使用自然语言的语法构建 DSL。

    这本书是由 Kotlin 团队的开发者 Dmitry Jemerov 和 Svetlana Isakova 合著的。
    
    涵盖了 Kotlin 类型系统的第 6 章、涵盖了 DSL 的第 11 章可作为 出版社网站上的免费样章取得。`,
    href: "https://github.com/ligenhw/goshare",
  },
  {
    img: "//img10.360buyimg.com/n1/jfs/t28996/317/185501197/59681/3c7e1ade/5bea770cNce1ad221.jpg",
    title: "Go 语言实战",
    subTitle: `  作为学习Go语言的入门书籍，非常适合Go语言的初学者。今年年初，想学习下Go，于是找到了这本书，看完之后非常有帮助。`,
    href: "https://github.com/ligenhw/goshare-website",
  },
  {
    img: "https://developer.android.google.cn/images/landing/kotlin-logo.svg",
    title: "pwstore",
    subTitle: "android密码管理应用， 基于kotlin",
    href: "https://github.com/ligenhw/pwstore",
  }
];

function Projects(props) {
  const { classes } = props;

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
                        Download
                    </Button>
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

export default withStyles(styles)(Projects)