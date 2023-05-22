import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(public http: HttpClient) { }
  deleteInvoiceArchieve(id):Observable<any> {
    return this.http.delete<any>(`${environment.serverUrl}invoice/history/archieve:${id}`).pipe(
      map(x => {
        return x;
      }),
      catchError(this.handleError)
    )
  }
  getInvoiceHistoryArchieve():Observable<any>{
    return this.http.get(`${environment.serverUrl}invoice/get/history/archieve`).pipe(map(
      x=>{
        return x;
      }
    ),catchError(this.handleError))
  }
postInvoiceHistoryArchieve(ids):Observable<any>{
  let data= {
    ids:ids
  }
  return this.http.post(`${environment.serverUrl}invoice/bulkpdf/zip`,data,{responseType: 'text'}
  ).pipe(map(
    x=>{
      return x;
    }
  ),catchError(this.handleError))
}
getbulkpdfdir(ids):Observable<any>{
  let data= {
    ids:ids
  }
    return this.http.post(`${environment.serverUrl}invoice/bulkpdf/dir`,data,{responseType: 'arraybuffer'}
    ).pipe(map(
      x=>{
        return x;
      }
    ),catchError(this.handleError))
    
  }

getBulkPDF(ids):Observable<any>{
let data= {
  ids:ids
}
  return this.http.post(`${environment.serverUrl}invoice/bulk/pdf`,data,{responseType: 'arraybuffer'}
  ).pipe(map(
    x=>{
      return x;
    }
  ),catchError(this.handleError))
}

  updateStatusAfterPayment(orderid, data) {
    return this.http.put(`${environment.serverUrl}invoice/payment/update/:${orderid}/status`, data).pipe(map(x => {
      return x;
    }), catchError(this.handleError))
  }

  getInvoice(): Observable<any> {
    return this.http.get<any>(environment.serverUrl + "invoice").pipe(
      map(x => {
        return x;
      }),
      catchError(this.handleError)
    )
  }

  getInvoicebyNO(no): Observable<any> {
    return this.http.get<any>(`${environment.serverUrl}invoices:${no}`).pipe(
      map(x => {
        return x;
      }),
      catchError(this.handleError)
    )
  }
  updateInvoice(id, data): Observable<any> {
    return this.http.put<any>(`${environment.serverUrl}invoice:${id}`, data).pipe(
      map(x => {
        return x;
      }),
      catchError(this.handleError)
    )
  }
  deleteInvoice(id): Observable<any> {
    return this.http.delete<any>(`${environment.serverUrl}invoice:${id}`).pipe(
      map(x => {
        return x;
      }),
      catchError(this.handleError)
    )
  }
  postInvoice(data): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}invoice`, data).pipe(
      map(x => {
        return x;
      }),
      catchError(this.handleError)
    )
  }
  deleteSelectedInvoice(id): Observable<any> {
    let data = {
      ids: id
    }
    return this.http.post(`${environment.serverUrl}invoice/delete`, data).pipe(map(x => {
      return x
    }), catchError(this.handleError)
    )
  }

  getInvoicePdfbyNo(no): Observable<any> {
    return this.http.get(`${environment.serverUrl}invoice/pdf:${no}`, { responseType: 'text' }).pipe(
      map((x: any) => {
        return x;
      }),
      catchError(this.handleError)
    )
  }
  getInvoiceReadablePDF(no): Observable<any> {
    return this.http.get(`${environment.serverUrl}invoice/${no}/pdf`, { responseType: 'blob' }).pipe(
      map(x => {
        return x
      }), catchError(this.handleError)
    )
  }
  handleError(httperror?: HttpErrorResponse) {
    return throwError(httperror.message || "Error In Message")
  }
}
