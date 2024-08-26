import ud2 from "../images/ud2.jpg"
import ud3 from "../images/ud3.jpg"
import ud4 from "../images/ud4.jpg"
import ud5 from "../images/ud5.jpg"

function Recommend()
{
    return(
        <div class="recommended">

        <h1 class="recomended__title">Recomended for you</h1>
        <p>Pick the best fit</p>

        <div class="recommended__container">

            <div class="course-card">
                <img src={ud2} alt="cc"></img>
                <h3>Python Data Visualization </h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={ud3} alt="cc"></img>
                <h3>Full Stack Development</h3>
                <p>Col Steele</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>

            </div>


            <div class="course-card">
                <img src={ud4} alt="cc"></img>
                <h3>Data Science</h3>
                <p>Col Steele</p>
                <p>4.3 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>

            </div>


            <div class="course-card">
                <img src={ud5} alt="cc"></img>
                <h3>Devops</h3>
                <p>Col Steele</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
        </div>
    </div>


    )
}

export default Recommend