import React from "react";
import s from './Users.module.css'

const Users = (props) => {

   if (props.users.length === 0) {
      props.setUsers([
             {
                id: 1,
                photoURL: 'https://img.freepik.com/premium-vector/mma-fighter-octagon_146796-516.jpg',
                fullName: 'Vladimir N.',
                followed: true,
                status: 'I\'m SEO',
                location: {city: 'Prague', country: 'Czechia'}
             },
             {
                id: 2,
                photoURL: 'https://a0.anyrgb.com/pngimg/436/1700/marathon-people-dot-splicing-people-sport-industry-freerunning-parkour-man-avatar-angry-man-marathon-old-man-running-man-thumbnail.png',
                fullName: 'Denis N.',
                followed: true,
                status: 'I\'m Boss here',
                location: {city: 'Cracow', country: 'Poland'}
             },
             {
                id: 3,
                photoURL: 'https://img.freepik.com/premium-vector/man-with-gun-mafia-gangster-avatar-character-mascot-illustration-vector_201904-1770.jpg?w=2000',
                fullName: 'Artur Ja.',
                followed: true,
                status: 'I\'m in',
                location: {city: 'Phuket', country: 'Thai'}
             },
             {
                id: 4,
                photoURL: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Advokat,_Fransk_advokatdr%C3%A4kt,_Nordisk_familjebok.png',
                fullName: 'Vadim K.',
                followed: false,
                status: 'I\'m ready',
                location: {city: 'Warsaw', country: 'Poland'}
             }
          ]
      )
   }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
           <span>
               <div>
                   <img className={s.avatars} src={u.photoURL}/>
               </div>
               <div>
                  {u.followed
                      ? <button onClick={() => {
                          props.unfollow(u.id)
                      }}>Unfollow</button>
                      : <button onClick={() => {
                          props.follow(u.id)
                      }}>Follow</button>}
               </div>
           </span>
                <span>
               <span>
                   <div>{u.fullName}</div>
                   <div>{u.status}</div>
               </span>
               <span>
                   <div>{u.location.country},</div>
                   <div>{u.location.city}</div>
               </span>
           </span>

            </div>)
        }
    </div>
}

export default Users;