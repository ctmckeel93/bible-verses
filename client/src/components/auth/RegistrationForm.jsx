
const RegistrationForm = props => {

    return (
        <>
            <form className="d-flex flex-column justify-content-start gap-3 w-100 bg-danger text-dark">
                <div className="form-group gap-2 w-50">
                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" />
                </div>

                <div className="form-group">
                    <button className="btn btn-dark">Register</button>
                </div>


            </form>
        </>
    )
}

export default RegistrationForm;