import React from "react";
import Style from './Details.module.css';
import Nav from '../components/Nav.jsx';

function Details(){
    return(
        <>
            <Nav />
            <div className={Style.container}>
                <center>
                    <h1>Abraham Lincoln</h1>
                    <img className={Style.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/1200px-Abraham_Lincoln_O-77_matte_collodion_print.jpg' height='300px' width='250px'></img>
                    <p>Abraham Lincoln (/ˈlɪŋkən/; February 12, 1809 – April 15, 1865) was an American lawyer and statesman who served as the 16th president of the United States from 1861 until his assassination in 1865. Lincoln led the nation through the American Civil War and succeeded in preserving the Union, abolishing slavery, bolstering the federal government, and modernizing the U.S. economy.</p>
                    <p>Lincoln was born into poverty in a log cabin and was raised on the frontier primarily in Indiana. He was self-educated and became a lawyer, Whig Party leader, Illinois state legislator, and U.S. Congressman from Illinois. In 1849, he returned to his law practice but became vexed by the opening of additional lands to slavery as a result of the Kansas–Nebraska Act. He reentered politics in 1854, becoming a leader in the new Republican Party, and he reached a national audience in the 1858 debates against Stephen Douglas. Lincoln ran for President in 1860, sweeping the North in victory. Pro-slavery elements in the South equated his success with the North's rejection of their right to practice slavery, and southern states began seceding from the Union. To secure its independence, the new Confederate States fired on Fort Sumter, a U.S. fort in the South, and Lincoln called up forces to suppress the rebellion and restore the Union.</p>
                </center>
            </div>
        </>
        )
}

export default Details;