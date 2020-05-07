const React = require('react');
const AppLayout = require('./AppLayout');

class Index extends React.Component {
  render() {
    const { title, fruits } = this.props;
    // render method must return something...
    return (
      <AppLayout>
        <h1>{title}</h1>
        <a href='/fruits/new'>Add New Fruit</a>
        <hr />
        <div className='fruit'>
          {fruits.map((fruit, index) => {
            let name = fruit.name;
            let id = fruit.id;

            name = name.charAt(0).toUpperCase() + name.slice(1);
            return (
              <div>
                <p>
                  The {fruit.name} is {fruit.color}.
                </p>
                <p>
                  {fruit.readyToEat
                    ? 'Its ready to eat'
                    : 'It is not ready to eat'}
                  .
                </p>
                <a href={`/fruits/${id}`}>Show {name} Details</a>
                {' | '}
                <a href={`/fruits/${id}/edit`}>Edit {name}</a>
                {/* DELETE FORM - forms can only get or put. 
              TRICK IT USING NPM PKG:
              npm i method-override --save
              */}
                <form action={`/fruits/${id}?_method=DELETE`} method='post'>
                  {/* must send post request so data is not immediately available in browser and appended to url (think username/password). it is sent to server instead.
                methodOverride will override method='post' with method='delete' and sent to 
                app.delete route instead of app.post route */}
                  <input
                    type='submit'
                    value='DELETE'
                    className='formBtn'
                    id={`delete-${id}`}
                  />
                </form>
                <hr />
              </div>
            );
          })}
        </div>
      </AppLayout>
    );
  }
}

module.exports = Index;
