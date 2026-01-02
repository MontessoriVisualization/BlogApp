const config = {
  projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  projectName: String(import.meta.env.VITE_APPWRITE_PROJECT_NAME),
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
//we are making this file because we will be using these variables in multiple files and if we switch to another framework we just need to change this file
export default config;
