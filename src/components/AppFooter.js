import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <strong>Bizniso</strong>
        <span className="ms-1">&copy; 2025 Сва права задржана.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Развијено уз помоћ</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI React шаблона
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
