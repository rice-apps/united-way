function Donation() {
  const goHome = () => {
    window.location.href = '/';
  };

  const shareResults = () => {
    window.location.href = '/';
  };

  const company = () => {
  }

    return (
      <>
        <a className=" normal-case text-m">Donation Page</a>
        <div></div>
        <button className="btn" onClick={goHome}>GO HOME</button>
        <div></div>

        Here's what the /company/ United Way campaign* made possible last year:
        <div>
          *based on campaign results of /enter dollar value/
        </div>

        <div></div>

        <button className="btn" onClick={shareResults}>SHARE YOUR RESULTS</button>

      </>
    );
  }
  
  export default Donation;