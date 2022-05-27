const Header = ({ handleInput }) => {
    const handleChange = (e) => {
        handleInput(e.target.value)
    }

    return (
        <section className="py-5 text-center header">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">TMDB </h1>
                    <p className="lead text-muted">Somewhere to find inspiration with movies</p>
                    <form className=''>
                        <input onChange={handleChange} className='form-control' type="text" placeholder='Faire votre recherche ici' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Header;