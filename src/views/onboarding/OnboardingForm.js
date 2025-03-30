// src/views/onboarding/OnboardingForm.js
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CCard, CCardBody, CButton } from '@coreui/react'

const OnboardingForm = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    employees: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
    else {
      console.log("Završeno:", formData)
      navigate("/dashboard")
    }
  }

  const steps = {
    1: (
      <>
        <h2 className="text-xl fw-bold mb-4">Како се зове ваш бизнис?</h2>
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Пример: Милица доо"
          className="form-control mb-3"
        />
      </>
    ),
    2: (
      <>
        <h2 className="text-xl fw-bold mb-4">Чиме се бавите?</h2>
        <input
          type="text"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          placeholder="Пример: Пекара, Ауто сервис, Бутик..."
          className="form-control mb-3"
        />
      </>
    ),
    3: (
      <>
        <h2 className="text-xl fw-bold mb-4">Колико запослених имате?</h2>
        <input
          type="number"
          name="employees"
          value={formData.employees}
          onChange={handleChange}
          placeholder="Пример: 3"
          className="form-control mb-3"
        />
      </>
    ),
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <CCard className="p-4 w-100" style={{ maxWidth: '480px' }}>
        <CCardBody>
          {steps[step]}
          <div className="d-flex justify-content-end mt-3">
            <CButton color="primary" onClick={handleNext}>
              {step < 3 ? "Даље" : "Заврши"}
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default OnboardingForm