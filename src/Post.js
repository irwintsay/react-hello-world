import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: 'This is a title',
      content: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
      comments: [
        {
          text: 'Hello everybody',
          author: 'Anon1'
        },
        {
          text: 'Hello guys',
          author: 'Anon2'
        }
      ]
    }
  }
  render() {
    const comments = this.state.comments.map((comment, i) => {
      return (
        <Comment
          key={i}
          author={comment.author}
          commentText={comment.text}
        />
      );
    });

    return (
      <div>
        <h2>{this.state.title}</h2>
        <h3>By: Irwin Tsay</h3>
        <p>{this.state.content}</p>
        <h4>Comment Section</h4>
        {comments}
      </div>
    );
  }
}

export default Post;