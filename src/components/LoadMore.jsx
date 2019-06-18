import React from 'react'
import { loadingTypeMenu } from '../store/actions/articles'

class LoadMore extends React.Component {

    constructor(props) {
        super(props)
        this.nomore = false
    }

    status() {
        switch(this.props.loadType){
            case loadingTypeMenu.MORE:
                return (
                    <span onClick={this.props.loadMoreFn}>加载更多</span>
                )
            case loadingTypeMenu.LOADING:
                return (
                    <span>加载中...</span>
                )
            case loadingTypeMenu.NOMORE:
                this.nomore = true
                return (
                    <span> ----没有更多了---- </span>
                )
            default:
                return (
                    <span>more</span>
                )
        }
    }

    render() {
        return (
            <div style={{
                height: '40px',
                margin: '30px auto 60px',
                padding: '10px 15px',
                textAlign: 'center',
                fontSize: '15px',
                borderRadius: '20px',
                color: '#fff',
                backgroundColor: '#a5a5a5',
                cursor: 'pointer'
                }} ref="wrapper">
                { this.status() }
            </div>
        )
    }

    //下拉加载更多的方法
    componentDidMount() {
        console.log('LoadMore', 'componentDidMount')
        // 使用滚动时自动加载更多
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper
        let timeoutId
        function callback() {
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore || this.nomore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 500)
        }.bind(this), false);
    }
    
}

export default LoadMore