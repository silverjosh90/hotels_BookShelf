var TitlePage = React.createClass({
  render: function() {
    return (
      <div>
        <Link />
        <h1 id='title'>Welcome To The Hotel List</h1>
        <h2 id="sub-title">Use the navigation above to begin</h2>
      </div>
    )
  }
})

var Link = React.createClass({
  render: function() {
    return (
    <div>
      <a id="signin" href="/sign-in"> Sign in </a>
      <a id="signup" href="/sign-up"> Sign up </a>
    </div>
  )
  }
})

ReactDOM.render(<TitlePage/>, document.querySelector('#content'));
