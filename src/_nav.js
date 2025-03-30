import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilFile,
  cilUser,
  cilStorage,
  cilCash,
  cilCalendar,
  cilChartPie,
  cilDescription,
  cilStar,
} from '@coreui/icons'
import { CNavItem, CNavTitle, CNavGroup } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Pocetna',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Fakture',
    to: '/fakture',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Klijenti',
    to: '/klijenti',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Zalihe',
    to: '/zalihe',
    icon: <CIcon icon={ cilStorage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Troškovi i prihodi',
    to: '/troskovi-prihodi',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Radnici i smene',
    to: '/radnici-smene',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Izveštaji',
    to: '/izvestaji',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Sistem',
  },
  {
    component: CNavGroup,
    name: 'Nalozi',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Prijava',
        to: '/prijava',
      },
      {
        component: CNavItem,
        name: 'Registracija',
        to: '/registracija',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Dokumentacija',
    href: 'https://bizniso.rs/dokumentacija',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav