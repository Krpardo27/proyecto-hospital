import React from 'react'

const ServiceList = ({ servicio }) => {

  const { nombre } = servicio

  return (
    <div>
      {nombre}
    </div>
  )
}

export default ServiceList
