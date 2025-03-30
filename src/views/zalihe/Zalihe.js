import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CFormInput,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from '@coreui/react'

const Zalihe = () => {
  const [zalihe, setZalihe] = useState([
    { id: 1, naziv: 'Brašno', kolicina: 100, jedinica: 'kg' },
    { id: 2, naziv: 'Šećer', kolicina: 50, jedinica: 'kg' },
  ])

  const [noviProizvod, setNoviProizvod] = useState({ naziv: '', kolicina: '', jedinica: '' })
  const [modalVisible, setModalVisible] = useState(false)

  const dodajProizvod = () => {
    if (!noviProizvod.naziv || !noviProizvod.kolicina || !noviProizvod.jedinica) return
    const novi = {
      ...noviProizvod,
      id: Date.now(),
      kolicina: parseFloat(noviProizvod.kolicina),
    }
    setZalihe([...zalihe, novi])
    setNoviProizvod({ naziv: '', kolicina: '', jedinica: '' })
    setModalVisible(false)
  }

  const obrisiProizvod = (id) => {
    setZalihe(zalihe.filter((p) => p.id !== id))
  }

  return (
    <CCard>
      <CCardHeader>
        <strong>Zalihe</strong>
        <CButton color="primary" className="float-end" onClick={() => setModalVisible(true)}>
          Dodaj proizvod
        </CButton>
      </CCardHeader>
      <CCardBody>
        <CTable striped hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>#</CTableHeaderCell>
              <CTableHeaderCell>Naziv</CTableHeaderCell>
              <CTableHeaderCell>Količina</CTableHeaderCell>
              <CTableHeaderCell>Jedinica</CTableHeaderCell>
              <CTableHeaderCell>Akcije</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {zalihe.map((p, i) => (
              <CTableRow key={p.id}>
                <CTableDataCell>{i + 1}</CTableDataCell>
                <CTableDataCell>{p.naziv}</CTableDataCell>
                <CTableDataCell>{p.kolicina}</CTableDataCell>
                <CTableDataCell>{p.jedinica}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="danger" size="sm" onClick={() => obrisiProizvod(p.id)}>
                    Obriši
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>

      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader>Dodaj novi proizvod</CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Naziv"
            value={noviProizvod.naziv}
            onChange={(e) => setNoviProizvod({ ...noviProizvod, naziv: e.target.value })}
            className="mb-2"
          />
          <CFormInput
            type="number"
            label="Količina"
            value={noviProizvod.kolicina}
            onChange={(e) => setNoviProizvod({ ...noviProizvod, kolicina: e.target.value })}
            className="mb-2"
          />
          <CFormInput
            type="text"
            label="Jedinica (npr. kg, l)"
            value={noviProizvod.jedinica}
            onChange={(e) => setNoviProizvod({ ...noviProizvod, jedinica: e.target.value })}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Otkaži
          </CButton>
          <CButton color="primary" onClick={dodajProizvod}>
            Sačuvaj
          </CButton>
        </CModalFooter>
      </CModal>
    </CCard>
  )
}

export default Zalihe
