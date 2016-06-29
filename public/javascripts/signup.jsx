
var SignUp = React.createClass({
  render: function() {
    return (
      <div>
        <h1 id='registerTitle'>Register</h1>
        <RegForm />
      </div>
    )
  }
});

var RegForm = React.createClass({
  render: function() {
    return (
      <form method="post" onSubmit={this.clickyclick}>
        <fieldset>
          <legend>Registration Form</legend>
          <input required ref="email" type="email" name='email'/>
          <br></br>
          <input required id='password' ref="pass" type="password" name='password'></input>
          <br></br>
          <input required id='matching' ref="matchPass" type="password"></input>
          <br></br>
          <input type='submit' value='Submit Tiny Peon!!!' ></input>
        </fieldset>
      </form>
    )
  },
  clickyclick: function(e) {
    e.preventDefault();
    var passOne = this.refs.pass.value;
    var passTwo = this.refs.matchPass.value;
    console.log('Here is pass one' + passOne);
    console.log('Here is pass two'+passTwo);
    if (!validator(passOne) || !isMatching(passOne, passTwo)) return;
    $.post('/api/users').then(function() {
      window.location.href='/hotels';
    })

  }
})

ReactDOM.render(<SignUp/>, document.querySelector('#content'));
