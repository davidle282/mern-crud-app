import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios.get("/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.posts,
        });
        console.log("post: ", this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/posts/delete/${id}`).then((res) => {
      alert(res.data.title + " has been deleted successfully");
      this.getPosts();
    });
  };

  render() {
    return (
      <div className="container">
        <p>All Post</p>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post, index) => (
              <tr>
                <th scope="row">{index}</th>

                <td>
                  <a href={`/posts/${post._id}`}>{post.title}</a>
                </td>
                <td dangerouslySetInnerHTML={{ __html: post.description }}></td>
                <td>{post.postCategory}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${post._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(post._id)}
                  >
                    <i class="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="/add" className="btn btn-success">
          Add New Post
        </a>
      </div>
    );
  }
}

export default App;
