import PropTypes from 'prop-types'
import React from 'react'

import ComponentsImg from 'src/assets/images/components.webp'

const DocsComponents = (props) => (
  <div className="bg-primary bg-opacity-10 border border-2 border-primary rounded mb-4">
    <div className="row d-flex align-items-center p-3 px-xl-4 flex-xl-nowrap">
      <div className="col-xl-auto col-12 d-none d-xl-block p-0">
        <img
          className="img-fluid"
          src={ComponentsImg}
          width="160px"
          height="160px"
          alt="Bizniso"
        />
      </div>
      <div className="col-md col-12 px-lg-4">
        <strong>Bizniso</strong> апликација је изграђена на модерним технологијама и пружа све што је потребно
        за управљање малим бизнисом – од фактурисања до извештаја.
        Ова компонента је пример интерфејса који ћеш користити у свом пословању.
      </div>
      <div className="col-md-auto col-12 mt-3 mt-lg-0">
        <a
          className="btn btn-primary text-nowrap text-white"
          href="https://bizniso.rs/dokumentacija" // ако немаш документацију, можеш оставити '#'
          target="_blank"
          rel="noopener noreferrer"
        >
          Погледај документацију
        </a>
      </div>
    </div>
  </div>
)

DocsComponents.propTypes = {
  href: PropTypes.string,
}

export default DocsComponents
