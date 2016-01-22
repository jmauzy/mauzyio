
var Navigation = React.createClass({
  getDefaultProps: function() {
    return { 
      tabList: [
        {
          id: 1,
          title: "Manage Posts",
          className: "active",
          paneId: "manage-pane",
          component: "ManagePosts"
        },
        {
          id: 2,
          title: "Create Post",
          className: "",
          paneId: "create-pane",
          component: "CreatePost"
        },
        {
          id: 3,
          title: "Preview Post",
          className: "",
          paneId: "preview-pane",
          component: "PreviewPost"
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
})

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
      <div role="tabpanel" className={this.props.data.className} className={"tab-pane "+this.props.data.className} id={this.props.data.paneId}>{this.props.data.title}</div>
    );
  }
})
