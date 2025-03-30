import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CFormInput,
  CFormSelect,
} from '@coreui/react'

const RadniciSmene = () => {
  const [radnici, setRadnici] = useState([
    { id: 1, ime: 'Milan Petrović', pozicija: 'Konobar', smena: 'Jutarnja' },
    { id: 2, ime: 'Jovana Janković', pozicija: 'Kuvar', smena: 'Popodnevna' },
  ])

  const [noviRadnik, setNoviRadnik] = useState({ ime: '', pozicija: '', smena: 'Jutarnja' })
  const [modal, setModal] = useState(false)

  const dodajRadnika = () => {
    if (!noviRadnik.ime || !noviRadnik.pozicija) return
    const novi = {
      ...noviRadnik,
      id: Date.now(),
    }
    setRadnici([...radnici, novi])
    setNoviRadnik({ ime: '', pozicija: '', smena: 'Jutarnja' })
    setModal(false)
  }

  const obrisiRadnika = (id) => {
    setRadnici(radnici.filter((r) => r.id !== id))
  }

  return (
    <CCard>
      <CCardHeader>
        <strong>Radnici i smene</strong>
        <CButton className="float-end" onClick={() => setModal(true)}>
          Dodaj radnika
        </CButton>
      </CCardHeader>
      <CCardBody>
        <CTable striped hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>#</CTableHeaderCell>
              <CTableHeaderCell>Ime</CTableHeaderCell>
              <CTableHeaderCell>Pozicija</CTableHeaderCell>
              <CTableHeaderCell>Smena</CTableHeaderCell>
              <CTableHeaderCell>Akcije</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {radnici.map((r, i) => (
              <CTableRow key={r.id}>
                <CTableDataCell>{i + 1}</CTableDataCell>
                <CTableDataCell>{r.ime}</CTableDataCell>
                <CTableDataCell>{r.pozicija}</CTableDataCell>
                <CTableDataCell>{r.smena}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="danger" size="sm" onClick={() => obrisiRadnika(r.id)}>
                    Obriši
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>

      <CModal visible={modal} onClose={() => setModal(false)}>
        <CModalHeader>Dodaj novog radnika</CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-2"
            label="Ime"
            value={noviRadnik.ime}
            onChange={(e) => setNoviRadnik({ ...noviRadnik, ime: e.target.value })}
          />
          <CFormInput
            className="mb-2"
            label="Pozicija"
            value={noviRadnik.pozicija}
            onChange={(e) => setNoviRadnik({ ...noviRadnik, pozicija: e.target.value })}
          />
          <CFormSelect
            label="Smena"
            value={noviRadnik.smena}
            onChange={(e) => setNoviRadnik({ ...noviRadnik, smena: e.target.value })}
            options={['Jutarnja', 'Popodnevna', 'Noćna']}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModal(false)}>
            Otkaži
          </CButton>
          <CButton color="primary" onClick={dodajRadnika}>
            Sačuvaj
          </CButton>
        </CModalFooter>
      </CModal>
    </CCard>
  )
}

export default RadniciSmene
