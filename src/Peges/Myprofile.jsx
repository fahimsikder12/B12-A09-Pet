import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../Context/AuthContext'
import { auth } from '../Firebase/Firebase.init'
import { updateProfile } from 'firebase/auth'
import { MdOutlineSaveAlt } from 'react-icons/md'
import { useContext } from 'react'

function Myprofile() {
  const {user} =useContext(AuthContext)


  const handleupdateUser=(e)=>{
    e.preventDefault();
    const name= e.target.name.value;
  const photo = e.target.photo.value;

 
  const profile={
          displayName:name,
          photoURL:photo,
        }
        updateProfile(auth.currentUser, profile)
        .then(() => {
          alert("Profile updated successfully");
          window.location.reload();  
        })
        .catch((error) => {
          console.error("Update failed", error);
          alert(error)
        });
  }
  return (
    <div>
      <Helmet>
            <title>MyProfile</title>
        </Helmet>
        <div className='bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-8 px-4'>
  {user && (
    <div className='max-w-md mx-auto'>
     
      <div className='bg-white rounded-2xl shadow-lg p-6 mb-8'>
    
        <div className='flex justify-center mb-4'>
          <div className='relative'>
            <img 
              className='w-32 h-32 rounded-full border-4 border-white shadow-lg' 
              src={user.photoURL} 
              alt="Profile" 
            />
            <div className='absolute inset-0 rounded-full border-2 border-blue-500 animate-pulse opacity-75'></div>
          </div>
        </div>

 
        <div className='text-center space-y-2'>
          <h2 className='text-2xl font-bold text-gray-800'>{user.displayName}</h2>
          <p className='text-gray-600 flex items-center justify-center'>
            <svg className='w-4 h-4 mr-1' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {user.email}
          </p>
        </div>
      </div>

      {/* Edit Form */}
      <form onSubmit={handleupdateUser} className='bg-white rounded-2xl shadow-lg p-6'>
        <h3 className='text-xl font-semibold text-gray-800 mb-4'>Edit Profile</h3>
        
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
            <input 
              type="text" 
              name='name'
              className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition'
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Photo URL</label>
            <input 
              type="text" 
              name='photo'
              className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition'
              placeholder="Paste image URL"
            />
          </div>
          
          <button 
            type='submit' 
            className='cursor-pointer w-full bg-[#3B82F6] hover:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center'
          >
          <MdOutlineSaveAlt />

            Save Changes
          </button>
        </div>
      </form>
    </div>
  )}
</div>

      </div>
  )
}

export default Myprofile