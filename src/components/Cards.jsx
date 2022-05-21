import React from 'react'
import '../App.css'

export const Cards = ( props ) => {
    
  
 return (

    <div>

    {
        props.form.map((e) => {
           
       return  (

        <div className='out' >
            <div className={e.name=="Amazon Gift"? "red cards" : "green cards" } >

                <div className='one'>
                    <p className='date' >{e.date}</p>
                    <img src={e.logo} alt="" srcset="" />
                </div>

                <div>
                    <button className='btn' > Case Study </button>
                </div>

                <div>
                    <h3 className='name' > {e.name} </h3>
                    <h3 className='name' >{e.pay}</h3>
                </div>

                

                <div className='two'>
                    <p>{e.site}</p>
                    <p><i class="fa-solid fa-arrow-right-long"></i></p>
                </div>

            </div>
        </div>

       )

    })

    }

    </div>
)
  
}


//   <div className='out' >
//         <div className='cards' >

//             <div>
//                 <p>date</p>
//                 <img src="" alt="" srcset="" />
//             </div>

//             <button className='btn' > Case Study </button>

//             <h3>Amazon Gift</h3>
            
//             <h3>Pay</h3>

//             <div>
//                 <p>Desktop / Mobile</p>
//                 <p><i class="fa-solid fa-arrow-right-long"></i></p>
//             </div>

//         </div>
//     </div>
    
//   )