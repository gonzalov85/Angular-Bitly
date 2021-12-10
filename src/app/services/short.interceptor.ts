import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const TOKEN ='9c9df313dea7c7a3718823d177a743fa5cee541c';
    request = request.clone( {setHeaders: {Authorization: 'Bearer ' + TOKEN}})
    return next.handle(request);
  }
}
