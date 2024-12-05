import React from 'react'
import handleSubmit from 'react'

const Button = ({ label, children, type = "submit", ...rest }) => {
  return (
    <div>
      <div>
        <button type={type} className="bg-blue-900 text-white font-medium border w-full rounded-lg p-1.5 pb-2 text-lg px-10">

          {label}
        </button>
      </div>
    </div>
  )
}

export default Button
// return (
//   <div className="mb-3 pt-3">
//     <button
//       type={type}
//       className="bg-orange-400 text-white font-medium border w-full rounded p-1.5 pb-2 text-lg px-10"
//     >
//       {label}
//     </button>
//   </div>
// );
