import toast from "react-hot-toast";

export default function useErrorToast(){
    const showError= (error)=>{
          const fullmessage= error.message || ''

            const firebaseErrors = {
  'invalid-credential': 'Invalid email or password.',
  'user-not-found': 'User not found.',
  'wrong-password': 'Incorrect password.',
  'too-many-requests': 'Too many login attempts. Try again later.',
  'internal-error':'Please Check your Internet connection',
  'network-request-failed': 'Please Check your Internet connection',

}

            const message=fullmessage.split('/')[1]?.split(')')[0];

        toast.error(firebaseErrors[message] || message)
    }
    return showError
}