var CreatePane = React.createClass({
  render: function() {
    return (
      <p>Create Post</p>
    );
  }
});

var ManagePane = React.createClass({
  getPosts: function() {
    $.ajax({
      url: '/posts/all',
      dataType: 'json',
      success: function(data) {
        this.setState({posts: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/posts/all', status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {posts: []};
  },
  componentDidMount: function() {
    this.getPosts();
  },
  render: function() {
    return (
      <div>
        <PostsTable posts={this.state.posts} />
      </div>
    );
  }
});

var PostsTable = React.createClass({
  getDefaultProps: function() {
    return {
      headers: [
        "Title",
        "Created",
        "Edited",
        "Views",
        "Edit",
        "Delete"
      ]
    };
  },
  render: function() {
    var tableHeader = this.props.headers.map(function(header) {
      return (
        <TableHeader header={header} />
      );
    });
    var tableData = this.props.posts.map(function(post) {
      return (
        <TableRow post={post} />
      );
    });
    return (
      <div>
        <table className="table table-hover">
          <tbody>
            <tr>
              {tableHeader}
            </tr>
            {tableData}
          </tbody>
        </table>
      </div>
    );
  }
});

var TableHeader = React.createClass({
  render: function() {
    return (
      <th>{this.props.header}</th>  
    );
  }
});

var TableRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>
          <PostLink 
            slug={this.props.post.slug}
            title={this.props.post.title}
          />
        </td>
      
        <td>
          {this.props.post.created_at}
        </td>

        <td>
          {this.props.post.updated_at}
        </td>

        <td>
          {this.props.post.views}
        </td>

        <td>
          Edit
        </td>

        <td>
          <DeleteLink
            slug={this.props.post.slug}
          />
        </td>
      </tr>
    );
  }
});

var PostLink = React.createClass({
  render: function() {
    return (
      <a 
        href={'/blog/'+this.props.slug}>
        {this.props.title}
      </a>
    );
  }
});

var DeleteLink = React.createClass({
  render: function() {
    return (
      <a 
        href={'/blog/'+this.props.slug}
        data-method="delete">
        Delete
      </a>
    )
  }
})

var PreviewPane = React.createClass({
  render: function() {
    return (
      <p>Preview Post</p>
    );
  }
});
var AdminPanel = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Admin Panel</h1>
        <Navigation />
      </div>
    );
  }
});

var Navigation = React.createClass({
  getDefaultProps: function() {
    return { 
      tabList: [
        {
          id: 1,
          title: "Manage Posts",
          className: "active",
          componentName: ManagePane,
          paneId: "manage-pane",
        },
        {
          id: 2,
          title: "Create Post",
          className: "",
          componentName: CreatePane,
          paneId: "create-pane",
        },
        {
          id: 3,
          title: "Preview Post",
          className: "",
          componentName: PreviewPane,
          paneId: "preview-pane",
        }
      ]
    }
  },
  render: function() {
    return (
      <div>
        <NavTabs data={this.props.tabList}/>
        <NavPanes data={this.props.tabList}/>
      </div>
    );
  }
});

var NavTabs = React.createClass({
  render: function() {
    var tabList = this.props.data.map(function(tab) {
      return (
        <Tab key={tab.id} data={tab} />
      );
    });
    return (
      <ul className="nav nav-tabs">
        {tabList}
      </ul>
    );
  }
});

var Tab = React.createClass({
  render: function() {
    return (
      <li role="presentation" className={this.props.data.className}>
        <a href={"#"+this.props.data.paneId} data-toggle="tab">
          {this.props.data.title}
        </a>
      </li>  
    );
  }
});

var NavPanes = React.createClass({
  render: function() {
    var paneList = this.props.data.map(function(pane) {
      return (
        <Pane key={pane.id} data={pane} />
      );
    })
    return (
      <div className="tab-content">
        {paneList}
      </div>
    );
  }
});


var Pane = React.createClass({
  render: function() {
    return (
      <div role="tabpanel" className={this.props.data.className} className={"tab-pane "+this.props.data.className} id={this.props.data.paneId}>
        <this.props.data.componentName /> 
      </div>
    );
  }
});

