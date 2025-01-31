class ResponseModel {
    codeResponse?: string;
    messageResponse?: string;
    dataResponse?: string;
  
    constructor(
      codeResponse?: string,
      messageResponse?: string,
      dataResponse?: string,
    ) {
      this.codeResponse = codeResponse;
      this.messageResponse = messageResponse;
      this.dataResponse = dataResponse;
    }
  
    // Method untuk menampilkan informasi pengguna
    displayResponseInfo(): string {
      return `User Info:
        ID: ${this.codeResponse}
        Name: ${this.messageResponse}
        Email: ${this.dataResponse}`;
    }
  }
  
  export default ResponseModel