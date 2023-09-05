import React from 'react'

const Pagination = ({ prev, next, onPrevious, onNext }) => {


  return (
    <div className='container my-4'>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            {
              prev ?
                <button className="page-link" href="#" onClick={onPrevious} aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </button>
                :
                null
            }
          </li>

          <li className="page-item">
            {
              next ?
                <button className="page-link text-dark" href="#" onClick={onNext} aria-label="Next">
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
