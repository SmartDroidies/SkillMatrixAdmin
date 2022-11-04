import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { LoadingService } from './loading.service';

/**
 * This class is for intercepting http requests. When a request starts, we set the loadingSub property
 * in the LoadingService to true. Once the request completes and we have a response, set the loadingSub
 * property to false. If an error occurs while servicing the request, set the loadingSub property to false.
 * @class {HttpRequestInterceptor}
 */

@Injectable({
  providedIn: 'root'
})
export class HttpRequestInterceptorService implements HttpInterceptor {

  constructor(private _loadingService: LoadingService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      pipe(catchError((err) => {
        this._loadingService.setLoading(false, req.url);
        return err;
      }))
      pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          this._loadingService.setLoading(false, req.url);
        }
        return evt;
      }));
  }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   this._loadingService.setLoading(true, request.url);
  //   return next.handle(request)
  //     pipe(catchError((err) => {
  //       this._loadingService.setLoading(false, request.url);
  //       return err;
  //     }))
  //     pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
  //       if (evt instanceof HttpResponse) {
  //         this._loadingService.setLoading(false, request.url);
  //       }
  //       return evt;
  //     }));
  // }
}
