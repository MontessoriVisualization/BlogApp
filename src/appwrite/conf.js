import config from "../confi/config";
import { Client, ID, TablesDB, Storage, Query, Databases } from "appwrite";
const client = new Client();
databases;
bucket;
export class AppwriteService {
  constructor() {
    this.client
      .setEndpoint(config.appwriteURL) // Your Appwrite Endpoint
      .setProject(config.projectId); // Your project ID
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, content, userId, featuredImage, status, slug }) {
    try {
      const response = await this.databases.createDocument(
        config.databaseId,
        config.collectionId,
        slug,
        { title, content, userId, featuredImage, status }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  async updatePost(slug, { title, content, featuredImage }) {
    try {
      const response = await this.databases.updateDocument(
        config.databaseId,
        config.collectionId,
        slug,
        { title, content, featuredImage, status }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  async deletePost(slug) {
    try {
      const response = await this.databases.deleteDocument(
        config.databaseId,
        config.collectionId,
        slug
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getPost(slug) {
    try {
      const response = await this.databases.getDocument(
        config.databaseId,
        config.collectionId,
        slug
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  async listPosts(query = [Query.equal("status", "active")]) {
    try {
      const response = await this.databases.listDocuments(
        config.databaseId,
        config.collectionId,
        query
      );
      return response.documents;
    } catch (error) {
      throw error;
    }
  }

  //file upload service
  async uploadFile(file) {
    try {
      const response = await this.bucket.createFile(
        config.bucketId,
        ID.unique(),
        file
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getFilePreview(fileId) {
    try {
      const response = this.bucket.getFilePreview(config.bucketId, fileId);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      const response = await this.bucket.deleteFile(config.bucketId, fileId);
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getFileDownload(fileId) {
    try {
      const response = this.bucket.getFileDownload(config.bucketId, fileId);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
const appwriteService = new AppwriteService();
export default appwriteService;
