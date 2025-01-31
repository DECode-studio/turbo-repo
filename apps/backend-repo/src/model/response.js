class ResponseModel {
    codeResponse;
    messageResponse;
    dataResponse;
    constructor(codeResponse, messageResponse, dataResponse) {
        this.codeResponse = codeResponse;
        this.messageResponse = messageResponse;
        this.dataResponse = dataResponse;
    }
    // Method untuk menampilkan informasi pengguna
    displayResponseInfo() {
        return `User Info:
        ID: ${this.codeResponse}
        Name: ${this.messageResponse}
        Email: ${this.dataResponse}`;
    }
}
export default ResponseModel;
