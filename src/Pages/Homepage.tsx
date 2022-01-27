import { Link } from 'react-router-dom';

export function Homepage() {
  return (
    <>
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="Balance display-3 fw-normal">Earn the crypto tokens</h1>
        <p className="Balance fs-5 text-muted">
          Choose the games type here 
        </p>

        <div className="Games col-lg-6 mx-auto">
          <div className="d-grid gap-4 d-sm-flex justify-content-sm-center mb-5">
            <Link to='/lite_game' className="btn btn-outline-success btn-lg px-4 me-sm-3" >Lite</Link>
            <Link to='/hard_game' className="btn btn-outline-danger btn-lg px-4">Hard</Link>
          </div>
        </div>
      </div>
    </>
  );
}
