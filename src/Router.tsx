import { Route, Routes } from 'react-router-dom'
import { SocialNotFound } from './components/SocialNotFound'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/social-not-found" element={<SocialNotFound />} />
      </Route>
    </Routes>
  )
}
