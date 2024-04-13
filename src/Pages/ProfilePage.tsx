import MainContent from '@/components/Profile/MainContent';
import SideBar from '@/components/Profile/SideBar';

const ProfilePage = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <SideBar />
      <MainContent />
    </div>
  );
};

export default ProfilePage;
