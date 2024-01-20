import { Spinner } from '@fluentui/react-components'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<Suspense fallback={<Spinner />}>
			{window.matchMedia('(max-width: 425px)').matches ?
				<Outlet /> : 'Play on mobile'}
		</Suspense>
	)
}
