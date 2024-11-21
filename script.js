// Firebase configuration
const firebaseConfig = {
    apiKey: "your-firebase-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Reference to the document where content is stored
  const docRef = db.collection("collab-editor").doc("document");
  
  // Select the editor element
  const editor = document.getElementById("editor");
  
  // Function to update Firestore document on change
  editor.addEventListener("input", () => {
    docRef.set({ content: editor.value });
  });
  
  // Function to sync Firestore content with editor
  docRef.onSnapshot((doc) => {
    if (doc.exists) {
      const data = doc.data();
      if (data.content !== editor.value) {
        editor.value = data.content;
      }
    }
  });
  