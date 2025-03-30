import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CFormInput,
  CFormSelect,
} from '@coreui/react'

const TroskoviPrihodi = () => {
  const [podaci, setPodaci] = useState([
    { id: 1, tip: 'Prihod', opis: 'Prodaja proizvoda', iznos: 25000 },
    { id: 2, tip: 'Trošak', opis: 'Kupovina materijala', iznos: 12000 },
  ])
  const [modal, setModal] = useState(false)
  const [noviUnos, setNoviUnos] = useState({ tip: 'Prihod', opis: '', iznos: '' })

  const dodajUnos = () => {
    if (!noviUnos.opis || !noviUnos.iznos) return
    const unos = {
      ...noviUnos,
      id: Date.now(),
      iznos: parseFloat(noviUnos.iznos),
    }
    setPodaci([...podaci, unos])
    setNoviUnos({ tip: 'Prihod', opis: '', iznos: '' })
    setModal(false)
  }

  const obrisiUnos = (id) => {
    setPodaci(podaci.filter((p) => p.id !== id))
  }

  const ukupnoPrihodi = podaci.filter(p => p.tip === 'Prihod').reduce((sum, p) => sum + p.iznos, 0)
  const ukupnoTroskovi = podaci.filter(p => p.tip === 'Trošak').reduce((sum, p) => sum + p.iznos, 0)
  const bilans = ukupnoPrihodi - ukupnoTroskovi

  return (
    <CCard>
      <CCardHeader>
        <strong>Troškovi i prihodi</strong>
        <CButton className="float-end" onClick={() => setModal(true)}>
          Novi unos
        </CButton>
      </CCardHeader>
      <CCardBody>
        <CTable striped responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>#</CTableHeaderCell>
              <CTableHeaderCell>Tip</CTableHeaderCell>
              <CTableHeaderCell>Opis</CTableHeaderCell>
              <CTableHeaderCell>Iznos (RSD)</CTableHeaderCell>
              <CTableHeaderCell>Akcije</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {podaci.map((p, i) => (
              <CTableRow key={p.id}>
                <CTableDataCell>{i + 1}</CTableDataCell>
                <CTableDataCell>{p.tip}</CTableDataCell>
                <CTableDataCell>{p.opis}</CTableDataCell>
                <CTableDataCell>{p.iznos.toLocaleString()}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="danger" size="sm" onClick={() => obrisiUnos(p.id)}>
                    Obriši
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
            <CTableRow color="light">
              <CTableDataCell colSpan={3}><strong>Ukupno prihodi:</strong></CTableDataCell>
              <CTableDataCell><strong>{ukupnoPrihodi.toLocaleString()} RSD</strong></CTableDataCell>
            </CTableRow>
            <CTableRow color="light">
              <CTableDataCell colSpan={3}><strong>Ukupno troškovi:</strong></CTableDataCell>
              <CTableDataCell><strong>{ukupnoTroskovi.toLocaleString()} RSD</strong></CTableDataCell>
            </CTableRow>
            <CTableRow color={bilans >= 0 ? 'success' : 'danger'}>
              <CTableDataCell colSpan={3}><strong>Bilans:</strong></CTableDataCell>
              <CTableDataCell><strong>{bilans.toLocaleString()} RSD</strong></CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>

      <CModal visible={modal} onClose={() => setModal(false)}>
        <CModalHeader>Dodaj novi unos</CModalHeader>
        <CModalBody>
          <CFormSelect
            className="mb-2"
            label="Tip"
            value={noviUnos.tip}
            onChange={(e) => setNoviUnos({ ...noviUnos, tip: e.target.value })}
            options={['Prihod', 'Trošak']}
          />
          <CFormInput
            className="mb-2"
            label="Opis"
            value={noviUnos.opis}
            onChange={(e) => setNoviUnos({ ...noviUnos, opis: e.target.value })}
          />
          <CFormInput
            type="number"
            label="Iznos (RSD)"
            value={noviUnos.iznos}
            onChange={(e) => setNoviUnos({ ...noviUnos, iznos: e.target.value })}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModal(false)}>Otkaži</CButton>
          <CButton color="primary" onClick={dodajUnos}>Sačuvaj</CButton>
        </CModalFooter>
      </CModal>
    </CCard>
  )
}

export default TroskoviPrihodi
