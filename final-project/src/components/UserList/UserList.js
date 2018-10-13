import React from "react";
import "./UserList.css";
import Join from "../Join/Join.js";
import Create from "../Create/Create.js";


const UserList = () => {
return (
    <div className="row">
        <div className="col s8 offset-s2">
            <div className="card-panel">
                <p>
                    USERNAME VS {/* {user1} VS {user2} */}
                    <span><button className="spectate">SPECTATE</button> <button className="join">JOIN</button></span>
                </p>
            </div>
        </div>
    </div>
)
}

export default UserList;
// MAKE A GET WITH AXIOS UPON LOADING



    // <div class="row">
    //     <div class="col s8 offset-s2">
    //         <div class="card-panel">
    //             <p style="text-align:left; font-family: 'Roboto', sans-serif; font-weight: bolder; font-size: 20px;">
    //                 {user1} VS {user2}
    //                 <span style="float:right; font-size: 20px;"> <button style="background-color: white; padding: 10px; margin-top: -10px; border: 2px solid black;">JOIN</button></span>
    //             </p>
    //         </div>
    //     </div>
    // </div>


    // <div class="row">
    //     <div class="col1 s12 m5">
    //         <div class="card-panel">
    //             <p className="leftHead">
    //                 Welcome back {Account.userName}!
    //           <span className="rightHead">Wins:{Account.winCount} Losses{Account.loseCount}</span>
    //             </p>
    //         </div>
    //     </div>
    // </div>

