import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'

const Pocetna = () => {
  return (
    <CCard>
      <CCardHeader>
        <h5>Početna</h5>
      </CCardHeader>
      <CCardBody>
        Dobrodošli u aplikaciju <strong>Bizniso</strong>. Ovde možete pratiti fakture, klijente, zalihe i još mnogo toga.
      </CCardBody>
    </CCard>
  )
}

export default Pocetna
