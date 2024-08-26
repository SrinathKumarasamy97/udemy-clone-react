function Navbar() {
    return (
        <div class="navbar">

            <div class="navbar__s1">
                <h1 class="navbar__s1__title">Udemy</h1>
            </div>

            <div class="navbar__s2">
                <i class="fa-solid fa-magnifying-glass" style={{ color: "#00040a" }}></i>
                <input type="text" placeholder="search for anything"></input>
            </div>

            <div class="navbar__s3">
                <p>Courses</p>

                <div class="mylearning">
                    <p>My learning</p>
                    <div class="mylearning__popup">
                        <p>You did not purchase anything yet</p>
                    </div>


                </div>
                <i className="fa-solid fa-cart-shopping" style={{ color: "#01060e" }}></i>
                <i className="fa-solid fa-bell" style={{ color: "#00040a" }}></i>
                <i className="fa-solid fa-user" style={{ color: "#000000" }}></i>
            </div>

            <div class="menubar">
                <i class="fa-solid fa-bars"></i>
            </div>

        </div>

    )
}

export default Navbar