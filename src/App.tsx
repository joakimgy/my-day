import React from "react";
import Application from "./components/Application";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase";
import ErrorBoundary from "./components/Error/ErrorBoundary";

export function App() {
  return (
    <ErrorBoundary>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Application />
      </FirebaseAppProvider>
    </ErrorBoundary>
  );
}

export default App;
