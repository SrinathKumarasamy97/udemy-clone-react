import ud1 from "../images/ud1.jpg"
function Saleimage()
{
    return(
        <div class="sale-image">
        <img src={ud1} alt="one"></img>
        <div class="offer">
            <h1>Udemy Flash Sale!</h1>
            <p>Get Top Courses for just 499</p>
        </div>
    </div>
    )
}

export default Saleimage