import React from 'react';

const PasswordGenerator = ({ password, nickname, setNickname, generatePassword, handleSavePassword }) => {
    return (
        <div className="password-generator">
            {password && (
                <div className="mt-6">
                    <p className="text-black text-xl font-bold text-center break-all cursor-pointer select-none" onDoubleClick={generatePassword}>{password}</p>
                    <p className='text-center font-rubik text-gray-400 text-md mt-4'>Two clicks to re-generate</p>
                    <p className='text-xl font-inter font-medium tracking-tight mt-8 '>Nickname:</p>
                    <input
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="Give it a nickname to help you find!"
                        className="mt-2 p-2 border rounded-xl w-4/5"
                    />
                    <br />
                    <button
                        className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded mt-4"
                        style={{ backgroundImage: "linear-gradient(45deg, rgba(212, 206, 255, 0.376), rgba(255, 98, 255, 0.25), rgb(255, 255, 255))"}}
                        onClick={handleSavePassword}
                    >
                        Save Password
                    </button>
                </div>
            )}
        </div>
    );
};

export default PasswordGenerator;
