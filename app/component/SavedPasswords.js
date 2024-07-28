import React, { useState } from "react";
import { RiEye2Line, RiEyeCloseFill } from "react-icons/ri";
import { BsCopy } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from '../utils/firebase';

const SavedPasswords = ({ savedPasswords, setSavedPasswords }) => {
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const toggleShowPassword = (index) => {
    setVisiblePasswords((prevVisiblePasswords) => ({
      ...prevVisiblePasswords,
      [index]: !prevVisiblePasswords[index],
    }));
  };

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  const deletePassword = async (id) => {
    await deleteDoc(doc(db, "passwords", id));
    setSavedPasswords((prevPasswords) =>
      prevPasswords.filter((password) => password.id !== id)
    );
  };

  return (
    <div className="saved-passwords">
      <h2 className="text-xl font-semibold mb-4">Saved Passwords</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {savedPasswords.map((entry, index) => (
          <div key={entry.id} className="card bg-white shadow-lg rounded-lg p-4">
            <div className="card-body">
              <h3 className="font-semibold text-lg mb-2">{entry.nickname}</h3>
              <div className="flex items-center justify-between">
                <p className="text-gray-700 break-all mr-2">
                  {visiblePasswords[index] ? entry.password : "••••••••••••"}
                </p>
                <div className="flex items-center space-x-2">
                  <button onClick={() => toggleShowPassword(index)}>
                    {visiblePasswords[index] ? <RiEyeCloseFill /> : <RiEye2Line />}
                  </button>
                  <button onClick={() => copyToClipboard(entry.password)}>
                    <BsCopy />
                  </button>
                  <button onClick={() => deletePassword(entry.id)}>
                    <MdOutlineDeleteOutline className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPasswords;
