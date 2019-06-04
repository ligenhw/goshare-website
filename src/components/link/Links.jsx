import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import links from './data'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        display: 'flex',                 // 使用flex布局
        flexWrap: 'wrap',                // 换行
        // justifyContent: 'space-between', //将末尾的空白 平均分到内容间隔中。
    },
    item: {
        width: '21%',                 // 使用百分比而不是数值，可是最后元素左对齐
        flexGrow: 0,
        margin: theme.spacing(2),
        height: '30px',
        display: 'flex',               // 嵌套flex
        alignItems: 'center',          // 子条目 交叉轴剧中对齐

    },
    img: {
        height: '36px',
        widht: '36px',
        marginRight: theme.spacing(1),
    },
    link: {
        fontSize: '1rem',
    }
}));

const render = (link, classes) => (
    <Box className={classes.item}>
        <img src={link.img} alt='logo' className={classes.img}></img>
        <Link href={link.url} className={classes.link}>
            {link.name}
        </Link>
    </Box>
)

export default () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {
                links.map(link => render(link, classes))
            }
        </Box>
    )
}