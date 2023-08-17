import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <h3>Page not found!</h3>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  );
}
