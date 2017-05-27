var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return (
//       <h2 class="panel panel-primary">About Component</h2>
//     );
//   }
// });

var About = () => {
  return (
    <div>
        <h1 className="text-center page-title">About</h1>
        <div className="callout default">
          <p>This is a weather application build on React. I have built this
            for The Complete React Web App Developer Course.</p>
          <p>Here are some of the tools I used:</p>
          <ul>
            <li>
              <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
            </li>
            <li>
              <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search
                for weather data by city name.
            </li>
          </ul>
        </div>

    </div>
  );
};

module.exports = About;
