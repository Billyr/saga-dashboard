import { ThemeProvider } from "styled-components";
import BaseLayout from "./components/layout/BaseLayout";
import DashBoard from "./screens/dashboard/DashboardScreen";
import PageNotFound from './screens/error/PageNotFoundScreen';
import { theme } from './styles/theme/theme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from './styles/global/GlobalStyles';

const routes = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <DashBoard />,
      }
    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]

function App() {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Routes>
            {
              routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}>
                  {
                    route.children && route.children.map((childRoute, childIndex) => 
                    (
                      <Route key={childIndex} path={childRoute.path} element={childRoute.element} />
                    ))
                  }
                </Route>
              ))
            }
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
