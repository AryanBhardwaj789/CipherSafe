# CipherSafe Password Manager

CipherSafe is a secure and user-friendly password manager built using React, Next.js, Firebase, and Tailwind CSS. It allows users to store, manage, and generate strong passwords securely.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)
- [Setup Instructions](#setup-instructions)
- [Components](#components)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Project Structure](#project-structure)

## Features
- **User Authentication**: Secure login and sign out using Clerk.
- **Password Generation**: Generate strong and secure passwords.
- **Password Storage**: Store and manage passwords securely using Firebase Firestore.
- **Password Visibility Toggle**: View or hide passwords.
- **Copy to Clipboard**: Copy passwords to the clipboard.
- **Password Deletion**: Delete passwords from storage.
- **Responsive Design**: Fully responsive design for a great user experience on all devices.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework with server-side rendering and static site generation.
- **Firebase**: Backend-as-a-Service (BaaS) for authentication and Firestore database.
- **Clerk**: Secure login and sign out using Clerk
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Headless UI**: Unstyled, fully accessible UI components.
- **React Icons**: Popular icons as React components.

## Contributors

- **Yuvraj Bhardwaj**


## Setup Instructions
To run this project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/AryanBhardwaj789/CipherSafe.git
    cd ciphersafe
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Setup Firebase**:
    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Enable Firestore and authentication in the Firebase project.
    - Copy your Firebase configuration and replace the placeholder in the `firebaseConfig` object in `utils/firebase.js`.

4. **Setup Clerk**:
    - Create a `.env.local` file in the root of the project.
    - Add your Clerk API key and frontend API to the `.env.local` file:

    ```env
    NEXT_PUBLIC_CLERK_FRONTEND_API=https://your-clerk-subdomain.clerk.dev
    CLERK_API_KEY=your_clerk_api_key
    ```
    Replace `your-clerk-subdomain` and `your_clerk_api_key` with your actual Clerk subdomain and API key.

5. **Run the development server**:
    ```sh
    npm run dev
    ```

6. **Open the application**:
    - Visit `http://localhost:3000` in your browser.

## Components

- **PasswordGenerator.js**: Component for generating strong passwords.
- **SavedPasswords.js**: Component for displaying saved passwords.

## Usage

- **Login**: Users can log in using their credentials.
- **Generate Password**: Users can generate strong passwords.
- **Save Password**: Users can save generated passwords.
- **Manage Passwords**: Users can view, copy, and delete saved passwords.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Project Structure
```plaintext
ciphersafe/
├── components/
│   ├── PasswordGenerator.js
│   ├── SavedPasswords.js
│   ├── Navbar.js
│   ├── Homepage.js
│   ├── Footer.js
├── auth/
│   ├── sign-in
│   │   ├── [[...sign-in]]
│   │   │   ├── page.js
│   ├── sign-up
│   │   ├── [[...sign-up]]
│   │   │   ├── page.js
├── login/
│   ├── page.js
├── main/
│   ├── layout.js
│   ├── page.js
├── public/
│   ├── images/
│   ├── fonts/
├── utils/
│   ├── firebase.js
├── .env.local
├── .gitignore
├── next.config.js
├── middleware.ts
├── package.json
└── README.md
