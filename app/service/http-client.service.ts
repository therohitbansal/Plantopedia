import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  static sendImageData(userModel: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient : HttpClient) { }

  getfilename(query: any) {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/predict`, query);
  }
  sendfiledata(query: any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/adddata`, query);
  }
  sendimagedata(query:any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/imagedata`, query);
  }
  sendimgname(query:any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/imagename`, query);
  }
  signup(query:any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/register`, query);
  }
  signin(query:any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/login`, query);
  }
  checkemail(query:any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/checkemail`, query);
  }
  checkotp(query:any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/checkotp`, query);
  }
  chngpswd(query:any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/chngpswd`, query);
  }
  resend()
  {
    return this.httpClient.get<any>(`${environment.apiBaseUrl}/resend`);
  }
  signout()
  {
    return this.httpClient.get<any>(`${environment.apiBaseUrl}/logout`);
  }
  checksignin()
  {
    return this.httpClient.get<any>(`${environment.apiBaseUrl}/checklogin`);
  }
  getfolders()
  {
    return this.httpClient.get<any>(`${environment.apiBaseUrl}/folderlist`);
  }
  folder_vote(query:any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/folder_vote`, query);
  }
  image_vote(query:any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/image_vote`, query);
  }
  getUpvotes()
  {
    return this.httpClient.get<any>(`${environment.apiBaseUrl}/getUpvotes`);
  }
  getFolderReviews()
  {
    return this.httpClient.get<any>(`${environment.apiBaseUrl}/folderReviews`);
  }
  getImgReviews()
  {
    return this.httpClient.get<any>(`${environment.apiBaseUrl}/ImgReviews`);
  }
  get_comments(query:any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/get_comments`,query);
  }
  save_comment(query:any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/save_comment`,query);
  }
  save_corrections(query:any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/save_corrections`,query);
  }
  get_corrections()
  {
    return this.httpClient.get<any>(`${environment.apiBaseUrl}/get_corrections`);
  }
  correction_vote(query:any)
  {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/correction_vote`, query);
  }
  getCorrectionReviews(){
    return this.httpClient.get<any>(`${environment.apiBaseUrl}/correctionReviews`); 
  }
}