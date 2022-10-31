import { FC, lazy, ReactNode, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./components/App"
import Spinner from "./components/debug/Spinner"

const IndexPage = lazy(() => import("./components/IndexPage"))
const DuckPage = lazy(() => import("./components/DuckPage"))

const LazyLoader = ({children}: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div><span>Loading</span><Spinner /></div>}>{children}</Suspense>
  )
}

const Root: FC = () => {
  // All React components must return one thing. A fragment (the empty tag <>) is such "one thing" that has no markup.
  return (
    <>
      <ErrorBoundary
        onError={(e) => {
          console.log(e)
        }}
        fallbackRender={() => {
          return <h1>Oh noes!</h1>
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={
                <LazyLoader>
                  <IndexPage />
                  </LazyLoader>
                }
                />
              <Route path="/duck/:id" element={
                <LazyLoader>
                  <DuckPage />
                </LazyLoader>
              }
            />
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  )
}

export default Root
