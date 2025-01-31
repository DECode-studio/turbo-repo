class ResponseModel {
    codeResponse;
    messageResponse;
    dataResponse;
    constructor(codeResponse, messageResponse, dataResponse) {
        this.codeResponse = codeResponse;
        this.messageResponse = messageResponse;
        this.dataResponse = dataResponse;
    }
}
export default ResponseModel;
