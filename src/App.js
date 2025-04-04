import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import './scss/examples.scss'

// Layout
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Stranice van layouta
const Prijava = React.lazy(() => import('./views/prijava/Prijava'))
//const Registracija = React.lazy(() => import('./views/registracija/Registracija'))
const LandingPage = React.lazy(() => import('./views/landing/LandingPage'))
const OnBoarding = React.lazy(() => import('./views/onboarding/OnboardingForm'))
// Error stranice
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          {/* Stranice bez layouta */}
          <Route exact path="/" name="Landing Page" element={<LandingPage />} />
          <Route exact path="/prijava" name="Prijava" element={<Prijava />} />
          <Route exact path="/onboarding" name="OnBoarding" element={<LandingPage />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />

          {/* Sve ostalo ide kroz layout */}
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
