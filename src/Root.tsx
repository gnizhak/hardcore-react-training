import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import DuckPage from "./components/DuckPage";
import IndexPage from "./components/IndexPage";

const Root: FC = () => {
  // All React components must return one thing. A fragment (the empty tag <>) is such "one thing" that has no markup.
  return (
    <>
      <ErrorBoundary
        onError={e => {
          console.log(e)
        }}
        fallbackRender={() => {
          return <h1>Oh noes!</h1>
        }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<IndexPage />} />
              <Route path="/duck/:id" element={<DuckPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};

export default Root;
