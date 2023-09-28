import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.png';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {
// all pages:
//   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesCount = 5;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div>
            {pages.map(p=> {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={ (e) => {props.onPageChanged(p); }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
           <span>
               <div>
                   <NavLink to={'/profile/' + u.id}>
                   <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={"ava"}
                        className={s.avatars}/>
                   </NavLink>
               </div>
               <div>
                  {u.followed
                      ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                          props.toggleFollowingProgress(true, u.id);
                          usersAPI.setUnFollow(u)
                              .then(data => {
                                  if (data.resultCode === 0) {
                                      props.unfollow(u.id);
                                  }
                                  props.toggleFollowingProgress(false, u.id);
                              });

                      }}>Unfollow</button>
                      : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                          props.toggleFollowingProgress(true, u.id);
                          usersAPI.setFollow(u)
                              .then(data => {
                                  if (data.resultCode === 0) {
                                      props.follow(u.id);
                                  }
                                  props.toggleFollowingProgress(false, u.id);
                              });


                      }}>Follow</button>}
               </div>
           </span>
                <span>
               <span>
                   <div>{u.name}</div>
                   <div>{u.status}</div>
               </span>
               <span>
                   <div>{"u.location.country"},</div>
                   <div>{"u.location.city"}</div>
               </span>
           </span>
            </div>)
        }
    </div>)
}


export default Users;