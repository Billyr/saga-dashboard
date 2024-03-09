import BaseLayout from "./components/layout/BaseLayout";
import DashBoard from "./screens/dashboard/DashboardScreen";
import PageNotFound from './screens/error/PageNotFoundScreen';

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
      <p>this is a test</p>
    </>
  )
}

export default App
