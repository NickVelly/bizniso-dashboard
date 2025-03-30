import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CWidgetStatsA,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCash, cilChart, cilCart } from '@coreui/icons'

const Izvestaji = () => {
  const podaci = [
    { naziv: 'Ukupan prihod', vrednost: '235.000 RSD', ikonica: cilCash },
    { naziv: 'Ukupan trošak', vrednost: '82.000 RSD', ikonica: cilCart },
    { naziv: 'Profit', vrednost: '153.000 RSD', ikonica: cilChart },
  ]

  const transakcije = [
    { datum: '2025-03-01', opis: 'Prodaja fakture #105', iznos: '+25.000 RSD' },
    { datum: '2025-03-02', opis: 'Kupovina robe', iznos: '-12.000 RSD' },
    { datum: '2025-03-04', opis: 'Isplata radnicima', iznos: '-30.000 RSD' },
    { datum: '2025-03-06', opis: 'Prodaja fakture #106', iznos: '+50.000 RSD' },
  ]

  return (
    <div>
      <CRow className="mb-4">
        {podaci.map((item, index) => (
          <CCol key={index} sm={4}>
            <CWidgetStatsA
              className="mb-3"
              value={item.vrednost}
              title={item.naziv}
              icon={<CIcon icon={item.ikonica} height={36} />}
            />
          </CCol>
        ))}
      </CRow>

      <CCard>
        <CCardHeader>
          <strong>Pregled poslednjih transakcija</strong>
        </CCardHeader>
        <CCardBody>
          <CTable striped hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Datum</CTableHeaderCell>
                <CTableHeaderCell>Opis</CTableHeaderCell>
                <CTableHeaderCell>Iznos</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {transakcije.map((t, i) => (
                <CTableRow key={i}>
                  <CTableDataCell>{t.datum}</CTableDataCell>
                  <CTableDataCell>{t.opis}</CTableDataCell>
                  <CTableDataCell>{t.iznos}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Izvestaji
