import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handleError = function (error) {
        var errorMessage;
        if (error instanceof Response) {
            errorMessage = "Erro " + error.status + " ao obter a URL " + error.url + " - " + error.statusText;
        }
        else {
            errorMessage = error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    };
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=app.error-handler.js.map