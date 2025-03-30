import React from 'react'

// Putevi ka stranicama (svi na latinici)
const Landing = React.lazy(() => import('./views/landing/LandingPage'))
const Pocetna = React.lazy(() => import('./views/dashboard/Pocetna'))


const Fakture = React.lazy(() => import('./views/fakture/Fakture'))
const Klijenti = React.lazy(() => import('./views/klijenti/Klijenti'))
const Zalihe = React.lazy(() => import('./views/zalihe/Zalihe'))
const TroskoviPrihodi = React.lazy(() => import('./views/troskovi-prihodi/TroskoviPrihodi'))
const RadniciSmene = React.lazy(() => import('./views/radnici-smene/RadniciSmene'))
const Izvestaji = React.lazy(() => import('./views/izvestaji/Izvestaji'))




const Prijava = React.lazy(() => import('./views/prijava/Prijava'))

const Onboarding = React.lazy(() => import('./views/onboarding/OnboardingForm'))

const routes = [
  { path: '/', exact: true, name: 'Landing' },
  { path: '/landing', name: 'Landing', element: Landing },
  { path: '/dashboard', name: 'Početna', element: Pocetna },
  { path: '/fakture', name: 'Fakture', element: Fakture },
  { path: '/klijenti', name: 'Klijenti', element: Klijenti },
  { path: '/zalihe', name: 'Zalihe', element: Zalihe },
  { path: '/troskovi-prihodi', name: 'Troškovi i prihodi', element: TroskoviPrihodi },
  { path: '/radnici-smene', name: 'Radnici i smene', element: RadniciSmene },
  { path: '/izvestaji', name: 'Izveštaji', element: Izvestaji },
  { path: '/prijava', name: 'Prijava', element: Prijava },
  { path: '/onboarding', name: 'Onboarding', element: Onboarding }, // ✅ Dodato
]

export default routes
