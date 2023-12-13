/* eslint-disable react/prop-types */
// ImageGrid.js
import { useState } from "react";
import Modal from "react-modal";
import { Document, Page } from "react-pdf";
import "./imagegrid.css"; // Asegúrate de crear este archivo de estilos
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

Modal.setAppElement("#root"); // O el elemento raíz de tu aplicación

const ImageGrid = ({ items }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const openModal = (pdf) => {
    setSelectedPdf(pdf);
    setModalIsOpen(true);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1); // Restablece a la primera página cuando se carga un nuevo documento
  };

  // Funciones para navegar entre las páginas
  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <>
      <div className="title-container" id="proyect">
        <h2 className="grid-title">PROYECTOS</h2>
      </div>
      <div className="grid">
        {items.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={`Thumbnail ${index}`}
            onClick={() => openModal(item.pdf)}
            className="grid-item"
          />
        ))}
      </div>
      <Modal
    isOpen={modalIsOpen}
    onRequestClose={() => setModalIsOpen(false)}
    contentLabel="PDF Viewer"
    className="modal"
    overlayClassName="overlay"
  >
    {selectedPdf && (
      <>
        <div className="pdf-container">
          <div className="pdf-navigation">
            <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
              Prev
            </button>
            <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
              Next
            </button>
          </div>
          <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <p className="page-indicator">
          Page {pageNumber} of {numPages}
        </p>
        <button onClick={() => setModalIsOpen(false)} className="close-button">Close</button>
      </>
    )}
  </Modal>
    </>
  );
};

export default ImageGrid;
