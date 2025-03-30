import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CContainer,
  CRow,
  CCol,
  CImage,
} from "@coreui/react";

const Prijava = () => {
  const [email, setEmail] = useState("");
  const [lozinka, setLozinka] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, lozinka);
      navigate('/onboarding'); // ✅ Ovde vodi na onboarding
    } catch (err) {
      alert("Greška pri prijavi: " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      alert("Greška pri Google prijavi: " + err.message);
    }
  };

  return (
    <CContainer className="d-flex align-items-center justify-content-center min-vh-100">
      <CRow className="justify-content-center w-100">
        <CCol xs={12} md={6} lg={4}>
          <CCard className="shadow rounded-4">
            <CCardHeader className="text-center fs-4 fw-bold">Prijava</CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleLogin}>
                <CFormInput
                  type="email"
                  label="Email adresa"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mb-3 rounded-pill"
                />
                <CFormInput
                  type="password"
                  label="Lozinka"
                  value={lozinka}
                  onChange={(e) => setLozinka(e.target.value)}
                  required
                  className="mb-3 rounded-pill"
                />
                <CButton
                  type="submit"
                  color="primary"
                  className="w-100 rounded-pill"
                >
                  Prijavi se
                </CButton>
              </CForm>

              <div className="text-center text-muted my-3">ili</div>

              <CButton
                color="light"
                className="w-100 border rounded-pill d-flex align-items-center justify-content-center"
                onClick={handleGoogleLogin}
              >
                <CImage
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  width={20}
                  height={20}
                  className="me-2"
                />
                Prijavi se preko Google naloga
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Prijava;
