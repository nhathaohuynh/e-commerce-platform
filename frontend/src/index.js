import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import Store from './redux/store'
import reportWebVitals from './reportWebVitals'

import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
	<Provider store={Store}>
		<App />
	</Provider>,
)

reportWebVitals()
