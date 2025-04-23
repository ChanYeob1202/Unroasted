
import { useAuth } from './useAuth';
import toast from 'react-hot-toast';

export const useResetPassword = () => {
  const { resetPassword } = useAuth();


  const handleResetPassword = async (email) => {
    if(!email) return false;

    try{
      await resetPassword(email);
      toast.success("Password reset email sent!");
      return true;
    } catch(error){
      switch(error.code) {
              case "auth/user-not-found":
                toast.error("No account exists with this email");
                break;
              case "auth/invalid-email":
                toast.error("Please enter a valid email");
                break;
              default:
                toast.error("Failed to send reset email");
            }
    }
  }


  return { handleResetPassword };
};