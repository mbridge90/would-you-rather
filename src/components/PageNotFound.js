import Nav from "./Nav";

const PageNotFound = (props) => {
  return (
      <div data-testid={'page-not-found'}>
        <Nav />
        <h2>404 Not Found</h2>
        <p>We're sorry but the page you are looking for doesn't appear to exist.</p>
      </div>
  )
}

export default PageNotFound;
