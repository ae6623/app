import React from 'react';
import ReactDOM from 'react-dom';
import BodyCenter from './bodycenter';

export default class Body extends React.Component {

    /**
     * 组件加载前
     */
    componentWillMount() {
        console.log("component-body pre=componentWillMount")
    }

    /**
     * 组件加载完毕,初始化数据
     */
    componentDidMount() {
        console.log("component-body after=componentDidMount");

        var userInfo = {
            userNick: "me",
            age: 20,
            hasAuth: false
        }

        setTimeout(() => {
            this.setState(userInfo);
            console.log('userInfo', userInfo)
        }, 3000);
    }

    constructor() {
        super();
        console.log(this.props) 
        this.state = {};
    }

    /**
     * 改变年龄
     * @param {*} age
     */
    changeUserInfoAge(age) {
        this.setState({age: age});
    }

    /**
     * 处理子组件的事件，需要注入到子组件中
     * @param {*} event
     */
    handleChangeBodyCenter(event) {
        this.setState({age: event.target.value});
    }

    render() {

        return (
            <div>
                <div>
                    <div>
                        <div>userNick => {this.state.userNick} </div>
                        <div>hasAuth -> {this.state.hasAuth}</div>
                        <div>age -> {this.state.age}</div>
                    </div>

                    {/*JSX userInfo.hasAuth*/}
                    <input
                        type="button"
                        value="changeUserInfo-age"
                        disabled={this.state.hasAuth}
                        onClick={this.changeUserInfoAge.bind(this, 99)}/>

                    <BodyCenter handleChangeBodyCenter={this.handleChangeBodyCenter.bind(this)}/>
                </div>
            </div>
        )
    }
}