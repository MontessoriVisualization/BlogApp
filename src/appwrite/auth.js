import config from "../confi/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwriteURL) // Your Appwrite Endpoint
      .setProject(config.projectId); // Your project ID
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession({
        email,
        password,
      });
      return session;
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      throw error;
    }
    return null;
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
  async googleLogin() {
    try {
      const response = await this.account.createOAuth2Session({
        provider: "google",
        success: "http://localhost:5173", // Adjust according to your frontend URL
        failure: "http://localhost:5173", // Adjust according to your frontend URL
      });
      return response;
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  }
}
const authService = new AuthService();
export default authService;
