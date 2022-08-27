import "./styles.css";
import { Component } from "react";
import { loadPosts } from "../../utils/load-post";
import Posts from "../../components/Posts/index";
import Container from "../../components/Container";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export default class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: [],
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, posts, allPosts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleInputChange = (e) => {
    const value = e.currentTarget.value

    this.setState({ ...this.state ,searchValue: value });
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts =
      searchValue.length > 0
        ? allPosts.filter((post) => {
            return post.title
              .toLowerCase()
              .includes(searchValue.toString().toLowerCase());
          })
        : posts;

    return (
      <Container>
        <div className="search_container">
          {searchValue.length > 0 && <h1>Buscando por: {searchValue}</h1>}

          <TextInput
            inputValue={searchValue}
            actionFn={this.handleInputChange}
            type="search"
            placeholder="Type your search..."
          />
        </div>

        {filteredPosts.length > 0 ? (
          <Posts posts={filteredPosts} />
        ) : (
          <p>Não existem posts!</p>
        )}

        {searchValue.length === 0 && (
          <>
            <Button
              disabled={noMorePosts}
              handleClick={this.loadMorePosts}
              btnText="Load more posts"
            />
          </>
        )}
      </Container>
    );
  }
}
