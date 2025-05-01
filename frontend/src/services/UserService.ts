import AuthService from './AuthService';

class UserService {
  static async getUser(id: string): Promise<any> {
    const headers = AuthService.getHeaders();
    const response = await fetch(`/api/users/${id}`, {
      method: 'GET',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to get user data');
    }

    return await response.json();
  }
}

export default UserService;