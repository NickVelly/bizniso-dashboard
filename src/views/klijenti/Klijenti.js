import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CBadge,
  CButton,
} from '@coreui/react'

const klijenti = [
  { id: 1, ime: 'Marko Marković', email: 'marko@gmail.com', status: 'Aktivan' },
  { id: 2, ime: 'Jovana Jović', email: 'jovana@gmail.com', status: 'Neaktivan' },
  { id: 3, ime: 'Petar Petrović', email: 'petar@gmail.com', status: 'Aktivan' },
]

const getStatusBadge = (status) => {
  switch (status) {
    case 'Aktivan':
      return 'success'
    case 'Neaktivan':
      return 'secondary'
    default:
      return 'primary'
  }
}

const Klijenti = () => {
  return (
    <CCard className="mb-4">
      <CCardHeader>
        <strong>Lista Klijenata</strong>
        <CButton color="primary" className="float-end">+ Novi Klijent</CButton>
      </CCardHeader>
      <CCardBody>
        <CTable align="middle" hover responsive bordered>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell>#</CTableHeaderCell>
              <CTableHeaderCell>Ime i Prezime</CTableHeaderCell>
              <CTableHeaderCell>Email</CTableHeaderCell>
              <CTableHeaderCell>Status</CTableHeaderCell>
              <CTableHeaderCell>Akcija</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {klijenti.map((klijent, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{klijent.id}</CTableDataCell>
                <CTableDataCell>{klijent.ime}</CTableDataCell>
                <CTableDataCell>{klijent.email}</CTableDataCell>
                <CTableDataCell>
                  <CBadge color={getStatusBadge(klijent.status)}>{klijent.status}</CBadge>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton size="sm" color="info" className="me-2">Izmeni</CButton>
                  <CButton size="sm" color="danger">Obriši</CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default Klijenti
