import React from 'react'

const Pagination = ({ prev, next, onPrevious, onNext }) => {

  const handlePrevious = () => {
    onPrevious();
  }

  const handleNext = () => {
    onNext();
  }

  return (
    <div className='container my-4'>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            {
              prev ?
                <button className="page-link" href="#" onClick={handlePrevious} aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </button>
                :
                null
            }
          </li>

          <li className="page-item">
            {
              next ?
                <button className="page-link text-white" href="#" onClick={handleNext} aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </button>
                :
                null
            }
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
