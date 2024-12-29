import React from 'react'
import { CvStyled } from './DownloadCvStyled'

export default function DownloadCv() {
  return (
    <CvStyled>
        <a href="/Shakhrizoda Zayniddinova_Frontend.pdf" download>
            <i className="bi bi-download"></i>
            Download CV
        </a>
    </CvStyled>
  )
}
