"use client"; 
import React, { useEffect, useState, Fragment } from 'react';
import { useUser, UserButton} from "@clerk/nextjs";
import { FaPlus } from 'react-icons/fa';
import { Dialog, Transition } from '@headlessui/react';
import PasswordGenerator from '../component/PasswordGenerator';
import SavedPasswords from '../component/SavedPasswords';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';

const Dashboard = () => {
  const { user, isLoaded, isSignedIn} = useUser();
  const [isClient, setIsClient] = useState(false);
  const [savedPasswords, setSavedPasswords] = useState([]);
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    setIsClient(true);

    const fetchPasswords = async () => {
      const querySnapshot = await getDocs(collection(db, 'passwords'));
      const passwords = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSavedPasswords(passwords);
    };

    fetchPasswords();
  }, []);

  const handleSavePassword = async () => {
    if (password && nickname) {
      const newPassword = { password, nickname };
      setSavedPasswords((prevPasswords) => [...prevPasswords, newPassword]);
      await addDoc(collection(db, 'passwords'), newPassword);
      setPassword('');
      setNickname('');
      setIsGeneratorOpen(false);
    }
  };

  const toggleGenerator = () => {
    setIsGeneratorOpen(!isGeneratorOpen);
    if (!isGeneratorOpen) {
      generatePassword();
    }
  };

  const generatePassword = () => {
    const length = 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let newPassword = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      newPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(newPassword);
  };

  if (!isClient) {
    return null;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    window.location.href = '/'; 
    return null; 
  }

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/images/mesh-gradient.png')" }}>
      <nav className='flex justify-between px-10 text-slate-600 py-4'>
        <div className='flex items-center font-bold'>
          <span className='text-lg font-bold cursor-default text-black'>CipherSafe</span>
        </div>
        <ul className='flex items-center'>
          <li>
            <button className="transition-all px-8 text-base text-black max-[600px]:text-sm max-[600px]:h-13 rounded-xl bg-white h-[44px] border-gray-200 cursor-default">
              <span>Welcome, <b>{user.fullName}</b></span>
            </button>
          </li>
          <button className='ml-10 text-2xl'>
          <UserButton />
          </button>
        </ul>
      </nav>
      <div className="flex-grow px-14 py-8">
        <div className="flex items-center mb-4">
          <h1 className="text-2xl font-semibold">Passwords</h1>
          <button className="bg-indigo-600 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded ml-6" style={{ backgroundImage: "linear-gradient(45deg, rgba(212, 206, 255, 0.376), rgba(255, 98, 255, 0.25), rgb(255, 255, 255))"}} onClick={toggleGenerator}>
            <FaPlus className="inline-block" />
          </button>
        </div>
        <Transition appear show={isGeneratorOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={toggleGenerator}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      New password
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your password was created with Security and it's encrypted from side to side.
                      </p>
                      <PasswordGenerator password={password} nickname={nickname} setNickname={setNickname} generatePassword={generatePassword} handleSavePassword={handleSavePassword} />
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                        onClick={toggleGenerator}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <SavedPasswords savedPasswords={savedPasswords} setSavedPasswords={setSavedPasswords} />
      </div>
    </div>
  );
};

export default Dashboard;
