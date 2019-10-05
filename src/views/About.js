import React from "react";
import News from "../components/News";
class About extends React.Component {
  state = {
    newsData: [],
    loading: false,
    error: undefined
  };
  componentDidMount = () => {
    // const { term } = this.props.match.params;
    const date = new Date();
    const term = "education";
    const url = `https://newsapi.org/v2/everything?q=${term}&from=${date}&sortBy=publishedAt&apiKey=74ed5959974f4d68be5dfe808c4673a5`;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        if (data.message) {
          this.setState({
            loading: false,
            error: data.message
          });
        } else {
          this.setState({
            loading: false,
            newsData: data.articles
          });
        }
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error.message
        });
      });
  };

  render() {
    const { error, loading, newsData } = this.state;
    return (
      <div class="col-6">
        <h1>Recent News on Education</h1>
        <h5>
          Powered by <a href="https://newsapi.org/"> News API</a>
        </h5>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            {newsData.map(article => {
              return <News article={article} />;
            })}{" "}
          </>
        )}
      </div>
    );
  }
}
export default About;
