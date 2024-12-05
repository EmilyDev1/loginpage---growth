import React from 'react';

const Auth = (props) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-96  p-5 rounded-xl shadow-lg border border-gray-300 ">
        {/* <Logo className="w-3/5 mx-auto" /> */}
        <div className=''>


          <div className='flex justify-center'>
            <label className="text-left text-lg text-gray-700 font-bold ">
              {props.title}
            </label>
          </div>

        </div>
        <div>
          {props.children}
        </div>
      </div>
      {/* <div className='col-span-7 bg-auth bg-cover rounded-r-lg'>
                        </div> */}
    </div>
  );
}

export default Auth
