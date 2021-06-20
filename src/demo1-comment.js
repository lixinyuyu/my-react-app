import React from 'react';
import './index.css';
class Comment extends React.Component {
    state = {
        person: '',
        content: '',
        arrs: [],
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleAdd = () => {
        const { person, content, arrs } = this.state;
        if (!content.trim() || !person.trim()) {
            alert('error: person or content empty value');
            return;
        }
        this.setState({
            // 标记特殊点
            arrs: [{ person, content }, ...arrs],
            person: '',
            content: '',
        })
    }
    handleShowComment = () => {
        if (this.state.arrs.length) {
            return (
                <ul>
                    { this.state.arrs.map((item, index) => (
                        <li key={index}>{'评论人:' + item.person}
                            <p>{item.content}</p>
                        </li>
                        )
                    )
                    }
                </ul>
            )
        }
        return (
            <div>还没有评论内容哦~</div>
        )
    }
    render() {
        return (
            <div className="warpper-box">
                <input placeholder="请输入评论人" name="person" value={this.state.person} onChange={this.handleChange}/><br />
                <textarea cols="30" rows="10" placeholder="请输入评论内容" name="content" value={this.state.content} onChange={this.handleChange}/><br />
                <button onClick={this.handleAdd}>发表评论</button>
                {this.handleShowComment()}
            </div>
        )
    }
}

export default Comment;
