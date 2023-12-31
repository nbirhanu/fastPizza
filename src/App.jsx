import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './ui/Home'
import Error from './ui/Error'
import Menu, { menuLoader } from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder from './features/order/CreateOrder'
import Order, { loadOrder } from './features/order/Order'
import AppLayout from './ui/AppLayout'
const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/menu',
				element: <Menu />,
				loader: menuLoader,
				errorElement: <Error />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/order/new',
				element: <CreateOrder />,
			},
			{
				path: '/order/:Id',
				element: <Order />,
				loader: loadOrder,
				errorElement: <Error />,
			},
		],
	},
])

const App = () => {
	return <RouterProvider router={router}></RouterProvider>
}

export default App
